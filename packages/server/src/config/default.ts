import path from "path";
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

type CONFIG = {
  port: number;
  origin: string;
  dbUri: string;
};
const config: CONFIG = {
  port: (process.env.PORT as unknown as number) || 8080,
  origin: (process.env.ORIGIN +
    `:${process.env.PORT as unknown as number}`) as unknown as string,
  dbUri: process.env.DATABASE_URL as unknown as string,
};

export default config;
