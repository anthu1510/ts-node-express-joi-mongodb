import { Model } from "./commonModel";
import { userSchema } from "../schemas/usersSchema";

export const userModel = Model.getModel(userSchema, "User");
