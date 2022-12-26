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

mongoose.connect(String(config.mongoDbUrl));

const ErrorHandler: ErrorRequestHandler = (err, _, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(res.statusCode).json({
    statusCode: res.statusCode,
    error: err.name,
    errorCode: err.code,
    message: err.message,
  });
  next();
};

app.use(ErrorHandler);

app.listen(config.port, () =>
  console.log(`server started at ${config.host}:${config.port}`)
);
