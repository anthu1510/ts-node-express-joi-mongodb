import Joi from "joi";
import { Schema } from "./commonSchema";

const userModelFields = {
  name: Joi.string().required().example("Raja"),
  email: Joi.string().email().required().example("raja@gmail.com"),
  password: Joi.string().required().example("welcome@123"),
  status: Joi.string()
    .optional()
    .valid("active", "inactive")
    .default("active")
    .example("welcome@123"),
};

export const userSchema = Joi.object(
  Schema.appendObjectId(userModelFields)
).meta({
  className: "IUser",
});

export const addUserSchema = Joi.object(userModelFields).meta({
  className: "IAddUser",
});
