"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const User = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
});
exports.UserModel = mongoose_1.default.model("User", User);
