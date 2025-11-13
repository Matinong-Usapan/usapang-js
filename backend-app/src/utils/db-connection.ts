import { Pool } from "pg";
import credentials from "../config/db-config.ts";

const pool = new Pool({
  host: credentials.HOST,
  user: credentials.USER,
  password: credentials.PASSWORD,
  port: credentials.PORT,
  database: credentials.DATABASE,
});

const connect = async () =>{
    try{
        const dbClient = await pool.connect();
        console.log("Database connection successful");
        return dbClient;
    } catch (error) {
        console.error("Database connection failed");
        throw error;
    }
}

export const DatabaseConnection =  {
    connect,
    pool
};