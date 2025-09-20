import { serve, type HttpBindings } from "@hono/node-server";
import { Hono } from "hono";
import { etag } from "hono/etag";
import { logger } from "hono/logger";
import todos from "./routes/todos.js";
import { onResponse } from "./libs/onResponse.js";
import { HTTPException } from "hono/http-exception";

type Bindings = HttpBindings & {};

const app = new Hono<{ Bindings: Bindings }>();
app.use(etag(), logger());
app.use(onResponse);
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    const message = err.message || undefined;
    const error = err.res?.statusText || undefined;
    return c.json({ success: false, error, message }, err.status);
  }
  return c.json({ success: false, message: "Internal Server Error" }, 500);
});

app.get("/", (c) => {
  return c.json({ root: true });
});
app.route("/todos", todos);

const server = serve(
  {
    fetch: app.fetch,
    port: 3000,
    hostname: "::",
  },
  (info) => {
    console.log(`Server Info: ${JSON.stringify(info)}`);
  }
);

// graceful shutdown
process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});
process.on("SIGTERM", () => {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
});
