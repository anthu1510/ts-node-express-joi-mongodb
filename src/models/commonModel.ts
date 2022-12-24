import Mongoose from "mongoose";
import joiToJson from "joi-to-json";
import { ObjectSchema } from "joi";

class CommonModel {
  getModel<T extends ObjectSchema>(schema: T, modelName: string) {
    const joiUserSchema = joiToJson(schema).properties;

    const schemaObj = new Mongoose.Schema(joiUserSchema);

    schemaObj.set("toJSON", {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    });

    return Mongoose.model(modelName, schemaObj);
  }
}

export const Model = new CommonModel();
