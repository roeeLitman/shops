"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletss = exports.update = exports.getAllSeller = exports.authLogin = void 0;
const AuthService_1 = __importDefault(require("../services/AuthService"));
// create token
const authLogin = async (req, res) => {
    try {
        const pylodeToken = await AuthService_1.default.createToken(req.body);
        res.status(pylodeToken.status).cookie('token', pylodeToken.data).json(pylodeToken);
    }
    catch (err) {
        console.log(err);
        res.send(500);
    }
};
exports.authLogin = authLogin;
const getAllSeller = async (req, res) => { };
exports.getAllSeller = getAllSeller;
const update = async (req, res) => { };
exports.update = update;
const deletss = async (req, res) => { };
exports.deletss = deletss;
