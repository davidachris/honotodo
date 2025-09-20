import { ajvValidator } from "@hono/ajv-validator";
import { StatusCode, httpError } from "./http.js";

type ValidatorFunc = typeof ajvValidator;

const validator: ValidatorFunc = (target, schema) => {
  return ajvValidator(target, schema, (result, _) => {
    if (!result.success) {
      const errMsg = result.errors.map((e) => `${e.message}`).join(", ");
      throw httpError(StatusCode.BadRequest, errMsg);
    }
  });
};

export default validator;
