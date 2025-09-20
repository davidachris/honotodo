import { Hono } from "hono";
import validator from "../libs/validator.js";
import { paramIdSchema } from "../schemas/general.js";

const app = new Hono();

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
