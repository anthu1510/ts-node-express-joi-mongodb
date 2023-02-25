import Joi from "joi";

class CommonSchema {
  appendObjectId(schema: Joi.SchemaMap): Joi.PartialSchemaMap {
    return {
      id: Joi.string().required().example("63f9ba82a4f3093d9b4a5c0e"),
      ...schema,
    };
  }
}

export const Schema = new CommonSchema();
