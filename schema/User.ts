import mongoose, { Schema, Document } from "mongoose";
const User = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("User", User);
