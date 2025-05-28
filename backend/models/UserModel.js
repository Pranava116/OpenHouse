import mongoose, { Schema } from "mongoose";
const UserModel = new Schema({
  USN: String,
  Admin: String,
});

const User = mongoose.model("User", UserModel);

export default User;
