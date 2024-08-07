import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";
import connectdb from "./db/connection.js"
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 7000;
const databaseUrl = process.env.database;
mongoose.set('strictQuery', false);
connectdb(databaseUrl);

app.use("/api", route);

app.listen(PORT, () => {
    console.log (`server is runing at ${PORT}`);
  });