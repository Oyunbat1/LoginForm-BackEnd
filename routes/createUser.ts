import express from "express";
import { createUser } from "../controllers/createUser";
const createUserRouter = express.Router();
createUserRouter.post("/", createUser);
export default createUserRouter;
