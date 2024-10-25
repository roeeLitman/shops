"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const role_1 = require("../enums/role");
exports.userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "enter name for project"],
        min: [2, "name is shorts"]
    },
    password: {
        type: String,
        required: [true, "enter password"],
    },
    email: {
        type: String,
        required: [true, "enter prase"],
    },
    store: {
        type: [mongoose_1.Schema.Types.ObjectId],
        required: false
    },
    yourOrder: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Order',
        required: false
    },
    role: {
        type: String,
        required: [true, "enter role"],
        enum: [role_1.role.client, role_1.role.seller]
    },
    isActiv: {
        type: Boolean,
        required: [true, "enter status store"],
        default: () => { return true; },
    }
});
const UserModel = mongoose_1.default.model("User", exports.userSchema);
exports.default = UserModel;
