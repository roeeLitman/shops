"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
    project: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Project",
        required: [true, "you dont enter id of object"]
    },
    send: {
        type: Date,
        required: [true, "enter time"]
    },
    arrived: {
        type: Date,
        required: false,
    }
});
