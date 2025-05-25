import { Router } from "express";
import express from "express";
import User from "../models/UserModel.js";

const router = express.Router();

router.post("/student", async (req, res) => {
  const { USN } = req.body;
  try {
    const NewUser = new User({
      USN: USN,
      Admin: false,
    });
    await NewUser.save();
    return res.status(200).json("Added Successfully");
  } catch (error) {
    console.log(error);
  }
});

// router.get("/", async (req, res) => {
//   console.log("Connected to the server");
//   return res.send("hello wolrd");
// });
export { router as UserRouter };
