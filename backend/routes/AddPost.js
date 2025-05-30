import { Router } from "express";
import express from "express";
import PostModel from "../models/PostModel";

const router = express.Router();
router.post("/", async (req, res) => {
  const { title, desc, date } = req.body;
  try {
    const NewPost = new PostModel({
      title: title,
      desc: desc,
      date: date,
    });
    await PostModel.save();
    return res.send("Post Added successfully").status(200);
  } catch {
    return res.send("Error occured");
  }
});
export { router as AddRouter };
