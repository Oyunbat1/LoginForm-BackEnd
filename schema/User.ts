import mongoose from "mongoose";
const User = new mongoose.Schema(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("User", User);
