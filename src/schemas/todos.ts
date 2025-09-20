import type { JSONSchemaType } from "ajv";



export const todoGETJsonBodySchema: JSONSchemaType<{
  title: string;
  completed: boolean;
}> = {
  type: "object",
  properties: {
    title: { type: "string" },
    completed: { type: "boolean" },
  },
  required: ["title", "completed"],
  additionalProperties: false,
};
