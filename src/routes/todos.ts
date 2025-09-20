import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { paramIdSchema } from "../schemas/general.js";
import validator from "../libs/validator.js";

const app = new Hono();
app.use(basicAuth({ username: "user", password: "pass" }));
app.use("/:id", validator("param", paramIdSchema));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.get("/:id", (c) => {
  return c.text(`Todo ID: ${c.req.param("id")}`);
});
app.post("/", (c) => {
  return c.text("Create Todo");
});
app.patch("/:id", (c) => {
  return c.text(`Update Todo ID: ${c.req.param("id")}`);
});
app.delete("/:id", (c) => {
  return c.text(`Delete Todo ID: ${c.req.param("id")}`);
});

export default app;
