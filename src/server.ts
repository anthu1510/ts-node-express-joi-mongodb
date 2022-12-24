import dotEnv from "dotenv";
import { convertFromDirectory } from "joi-to-typescript";
import express, { Application } from "express";
import mongoose from "mongoose";
import routes from "./routes";

dotEnv.config();
const app: Application = express();
const port = process.env.PORT || 3000;

// common middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route file
routes(app);

convertFromDirectory({
  schemaDirectory: "./src/schemas",
  typeOutputDirectory: "./src/@types",
}).then(() => {
  console.log(`interfaces are created...`);
});

mongoose
  .connect(String(process.env.MONGODB_URL))
  .then(() => {
    app.listen(port, () =>
      console.log(`server started at ${process.env.HOST}:${port}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
