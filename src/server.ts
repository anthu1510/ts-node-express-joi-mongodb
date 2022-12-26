import express, { Application, ErrorRequestHandler } from "express";
import { ValidationError } from "express-validation";
import mongoose from "mongoose";
import routes from "./routes";
import { config } from "./config/config";

const app: Application = express();
const port = process.env.PORT || 3000;

// common middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route file
routes(app);

const ErrorHandler: ErrorRequestHandler = (err, _, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  if (err.name === "MongoError") {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
  next();
};

mongoose.connect(String(config.mongoDbUrl));
app.use(ErrorHandler);

app.listen(config.port, () =>
  console.log(`server started at ${config.host}:${config.port}`)
);
