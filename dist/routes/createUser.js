"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUser_1 = require("../controllers/createUser");
const createUserRouter = express_1.default.Router();
createUserRouter.post("/", createUser_1.createUser);
exports.default = createUserRouter;
