import express from "express";
import { getUser } from "../controllers/getUser";

const getUserRouter = express.Router();
getUserRouter.get("/", getUser);
export default getUserRouter;
