"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletss = exports.update = exports.getAllSeller = exports.createSeller = void 0;
const SelerService_1 = __importDefault(require("../services/SelerService"));
const createSeller = async (req, res) => {
    try {
        console.log(req.body);
        const newSeler = await SelerService_1.default.create(req.body);
        res.status(newSeler.status).json(newSeler);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
exports.createSeller = createSeller;
const getAllSeller = async (req, res) => { };
exports.getAllSeller = getAllSeller;
const update = async (req, res) => { };
exports.update = update;
const deletss = async (req, res) => { };
exports.deletss = deletss;
