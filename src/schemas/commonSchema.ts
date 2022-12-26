import Joi from "joi";

class CommonSchema {
  appendObjectId(schema: Joi.SchemaMap): Joi.PartialSchemaMap {
    return {
      id: Joi.string().required(),
      ...schema,
    };
  }
}

export const Schema = new CommonSchema();
