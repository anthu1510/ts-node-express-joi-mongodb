import Joi from "joi";

import { Schema } from "./commonSchema";

const productModelFields = {
  name: Joi.string().required().example("Laptop"),
  price: Joi.number().required().example(145),
  image: Joi.string().optional().example("http//laptop.png"),
  sku: Joi.number().required().example(166),
  dicount: Joi.number().required().example(50),
};

export const productSchema = Joi.object(
  Schema.appendObjectId(productModelFields)
).meta({
  className: "IProduct",
});

export const addUserSchema = Joi.object(productModelFields).meta({
  className: "IAddProduct",
});
