"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootMessenger = (0, express_1.Router)();
// create seller
rootMessenger.post('/register', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//get all order
rootMessenger.get('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//geet specifi order
rootMessenger.get('/id', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// get all order of specifi client
rootMessenger.get('/getorder/:id', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// add product 
rootMessenger.put('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// delete prodact
rootMessenger.delete('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//delete shop
rootMessenger.delete('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
exports.default = rootMessenger;
