import express from "express";
import cors from "cors";
import 'dotenv/config'
import mongoose, { mongo } from "mongoose";
import { UserRouter } from "./routes/login.js";
import bodyparser from "body-parser";
const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  }),
);

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
app.use(cors());
app.use("/login", UserRouter);
app.listen(PORT, (req, res) => {
  mongoose
    .connect(
      MONGO_URI,
    )
    .then(console.log("Connected to the database"));
  console.log("RUNNING IN PORT ", PORT);
});
