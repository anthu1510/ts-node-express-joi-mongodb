import dotEnv from "dotenv";

dotEnv.config();

const port = process.env.PORT || 6000;
const host = String(process.env.HOST) || "";
const mongoDbUrl = String(process.env.MONGODB_URL) || "";

export const config = {
  port,
  host,
  mongoDbUrl,
};
