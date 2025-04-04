import { Request, Response } from "express";
import express from "express";
import createUserRouter from "../routes/createUser";
import { connectDb } from "../utils/connection";
import getUserRouter from "../routes/getUser";
const app = express();
const port = 3000;
app.use(express.json());

app.use("/createUser", createUserRouter);
app.use("/getUser", getUserRouter);

app.listen(port, async () => {
  await connectDb();
  console.log("Connected to MongoDB");
  console.log(`Server is running on port ${port}`);
});
