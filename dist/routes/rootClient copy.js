"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootClient = (0, express_1.Router)();
// create seller
rootClient.post('/register', () => { });
//get all order
rootClient.get('/', () => { });
//geet specifi order
rootClient.get('/id', () => { });
// get all order of specifi client
rootClient.get('/getorder/:id', () => { });
// add product 
rootClient.put('/', () => { });
// delete prodact
rootClient.delete('/', () => { });
//delete shop
rootClient.delete('/', () => { });
exports.default = rootClient;
