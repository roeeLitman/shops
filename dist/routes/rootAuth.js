"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_copy_1 = require("../controller/authController copy");
const routAuth = (0, express_1.Router)();
// login
routAuth.post('/login', authController_copy_1.authLogin);
//get all order
routAuth.get('/', () => { });
exports.default = routAuth;
