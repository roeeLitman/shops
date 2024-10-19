"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const conction = await mongoose_1.default.connect(process.env.URL_MONGOOSE);
        console.log('mongo is connect');
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = connectDB;
