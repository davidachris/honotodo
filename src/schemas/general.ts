import type { JSONSchemaType } from "ajv";

export const paramIdSchema: JSONSchemaType<{ id: string }> = {
  type: "object",
  properties: {
    id: { type: "string", pattern: "^[0-9a-fA-F]{24}$" },
  },
  required: ["id"],
};
