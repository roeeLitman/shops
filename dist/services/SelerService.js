"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = __importDefault(require("../typs/models/userSchema"));
class SelerService {
    static async create(sellerFromReq) {
        try {
            // to hnhsh password
            //add seler from db
            console.log(sellerFromReq);
            const newSeller = await new userSchema_1.default(sellerFromReq);
            await newSeller.save();
            console.log(newSeller);
            return {
                err: false,
                status: 200,
                data: newSeller,
                msege: `user: ${newSeller.name} is created`
            };
        }
        catch (err) {
            return {
                err: false,
                status: 400,
                data: err,
            };
        }
    }
}
exports.default = SelerService;
