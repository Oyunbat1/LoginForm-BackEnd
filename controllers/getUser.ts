import { Request, Response, Express } from "express";
import { UserModel } from "../schema/User";

export const getUser = async (req: Request, res: Response) => {
  try {
    const created = await UserModel.find();
    res.json({
      success: true,
      created,
    });
  } catch (err) {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
