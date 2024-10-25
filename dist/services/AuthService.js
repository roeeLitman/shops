"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = __importDefault(require("../typs/models/userSchema"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class SelerService {
    static async createToken(logiReq) {
        try {
            //found user
            const userFromDB = await userSchema_1.default.findOne({ name: logiReq.name }, { id: 1, name: 1, isActiv: 1, role: 1, password: 1 });
            //check ifc user exisit and if password match
            if (!userFromDB || userFromDB.password !== logiReq.password) {
                return {
                    err: true,
                    status: 400,
                    msege: `wornng name or password`,
                };
            }
            //crete token
            const payload = await jsonwebtoken_1.default.sign({ id: userFromDB.id, name: userFromDB.name, role: userFromDB.role }, process.env.SecretKey, { expiresIn: "10m" });
            // returen mesage with token
            return {
                err: false,
                status: 200,
                data: payload,
            };
        }
        catch (err) {
            return {
                err: true,
                status: 500,
                data: err,
            };
        }
    }
}
exports.default = SelerService;
