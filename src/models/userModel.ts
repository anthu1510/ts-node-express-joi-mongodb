import { Model } from "./commonModel";
import { userSchema } from "../schemas/usersSchema";
import { IUser } from "../@types";

export const userModel = Model.getModel<IUser>(userSchema, "User");
