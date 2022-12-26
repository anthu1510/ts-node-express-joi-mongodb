import { Router } from "express";
import { IAddUser, IUser } from "../@types";
import { userModel } from "../models/userModel";
import { validate } from "express-validation";
import { addUserValidation } from "../validations/userValidation";

const router = Router();

router.get("/", (req, res) => {
  res.send("sample");
});

router.post("/", validate(addUserValidation), async (req, res, next) => {
  try {
    const { name, email, password }: IAddUser = req.body;
    const user = new userModel({
      name,
      email,
      password,
    });

    const result = await user.save();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
