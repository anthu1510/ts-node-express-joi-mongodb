import { Router } from "express";
import { userModel } from "../models/userModel";

const router = Router();

router.get("/", (req, res) => {
  res.send("sample");
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new userModel({
    name,
    email,
    password,
  });

  const result = await user.save();
  res.send(result);
});

export default router;
