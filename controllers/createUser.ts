import { Request, Response } from "express";
import { UserModel } from "../schema/User";
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email, lastname, confirmpassword } = req.body;
    const created = await UserModel.create({
      username,
      password,
      email,
      lastname,
      confirmpassword,
    });
    res.json({
      success: true,
      message: "User created successfully",
      user: created,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
