import mongoose, { Schema } from "mongoose";

const PostModel = new Schema({
  title: String,
  desc: String,
  date: String,
  userOwner: { type: mongoose.Types.ObjectId, ref: "users" },
});
const postModel = mongoose.model("PostModel", CardModel);
export default PostModel;
