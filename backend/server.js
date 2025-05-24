import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import { UserRouter } from "./routes/login.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/login", UserRouter);
app.use("/", UserRouter);
app.listen(4000, (req, res) => {
  mongoose
    .connect(
      "mongodb+srv://pranavagrao116:VRxr9vaFadqSlZOG@cluster0.qehstqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    )
    .then(console.log("Connected to the database"));
  console.log("RUNNING IN PORT 4000");
});
