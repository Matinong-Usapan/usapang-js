import DBCredentialsInterface from "../interface/config/IDbCredentials.ts";
import { Buffer } from "node:buffer";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const dbHost: string | undefined = process.env.DB_HOST
const dbUser: string | undefined = process.env.DB_USER;
const dbPass: string | undefined = process.env.DB_PASSWORD;
const dbPort: string | undefined = process.env.DB_PORT;
const dbDatabase: string | undefined = process.env.DB_NAME;

console.log(`dbHost : ${dbHost} dbUser : ${dbUser} dbPass : ${dbPass} dbPort : ${dbPort} dbDatabase : ${dbDatabase}`);

if(dbHost === undefined || dbUser === undefined || dbPass === undefined || dbPort === undefined 
    || dbDatabase === undefined) throw new Error("Missing configuration details.");

const credentials: DBCredentialsInterface = {
  HOST: dbHost+'',
  USER: Buffer.from(dbUser, 'base64').toString('binary'),
  PASSWORD: Buffer.from(dbPass, 'base64').toString('binary'),
  PORT: Number.parseInt(dbPort),
  DATABASE: dbDatabase,
};

console.log(JSON.stringify(credentials));

export default credentials;