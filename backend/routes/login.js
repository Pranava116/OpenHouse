import { Router } from "express";
import User from "../models/UserModel";

const router = Router();

router.post("/login/student", async (req, res) => {
  const { USN } = req.body;
  const NewUser = new User({
    USN: USN,
    Admin: False,
  });
  await NewUser.save();
  return res.json("Added Successfully");
});
