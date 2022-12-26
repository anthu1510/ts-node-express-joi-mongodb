import Mongoose, { Schema, Document } from "mongoose";
import joiToJson from "joi-to-json";
import Joi from "joi";

class CommonModel {
  getModel<I>(schema: Joi.Schema, modelName: string) {
    const joiSchema: DocumentType = joiToJson(schema).properties;

    const schemaObj: Schema = new Mongoose.Schema<I>(joiSchema, {
      versionKey: false,
      timestamps: true,
    });

    schemaObj.set("toJSON", {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    });

    return Mongoose.model<I>(modelName, schemaObj);
  }
}

export const Model = new CommonModel();
