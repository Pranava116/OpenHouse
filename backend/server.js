import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
const app = express();

app.use(cors());

app.listen(4000, (req, res) => {
  mongoose
    .connect(
      "mongodb+srv://pranavagrao116:VRxr9vaFadqSlZOG@cluster0.qehstqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    )
    .then(console.log("COnnected to the database"));
  console.log("RUNNING IN PORT 4000");
});
