import { Application } from "express";
import userRouter from "./userRouter";

const routes = (app: Application) => {
  app.use("/users", userRouter);
};

export default routes;
