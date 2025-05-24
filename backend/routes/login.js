import { Router } from "express";
import express from "express";
import User from "../models/UserModel.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  console.log("Hello");
  const { USN } = req.body;
  const NewUser = new User({
    USN: USN,
    Admin: False,
  });
  await NewUser.save();
  return res.json("Added Successfully");
});

// router.get("/", async (req, res) => {
//   console.log("Connected to the server");
//   return res.send("hello wolrd");
// });
export { router as UserRouter };
