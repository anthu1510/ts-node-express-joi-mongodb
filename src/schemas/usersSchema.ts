import Joi from "joi";

const userModelFields = {
  id: Joi.string()
    .required()
    .hex()
    .length(24)
    .example("63a71adfe4ac51511d9e918f"),
  name: Joi.string().required().example("Raja"),
  email: Joi.string().required().example("raja@gmail.com"),
  password: Joi.string().required().example("welcome@123"),
  status: Joi.string()
    .optional()
    .valid("active", "inactive")
    .default("active")
    .example("welcome@123"),
};

export const userSchema = Joi.object(userModelFields).meta({
  className: "User",
});
