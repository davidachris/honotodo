import { createMiddleware } from "hono/factory";
import { httpError, StatusCode } from "./http.js";

export const onResponse = createMiddleware(async (c, next) => {
  await next();

  if (!c.finalized) return;
  const originalRes = c.res;
  const status = originalRes.status;
  const contentType = originalRes.headers.get("Content-Type") || "";
  if (status >= StatusCode.BadRequest) {
    if (contentType.includes("application/json")) return;
    throw httpError(status as StatusCode);
  }
  const clonedRes = originalRes.clone();

  let newBody = {
    success: true,
    data: undefined as object | string | undefined,
  };
  if (contentType.includes("application/json")) {
    newBody.data = await clonedRes.json();
    c.res = c.json(newBody, originalRes.status as any);
    return;
  }
  if (contentType.includes("text/plain")) {
    newBody.data = await clonedRes.text();
    c.res = c.json(newBody, originalRes.status as any);
    return;
  }
  return;
});
