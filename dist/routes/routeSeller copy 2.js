"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootSeller = (0, express_1.Router)();
// create seller
rootSeller.post('/register', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//get all order
rootSeller.get('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//geet specifi order
rootSeller.get('/id', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// get all order of specifi client
rootSeller.get('/getorder/:id', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// add product 
rootSeller.put('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// delete prodact
rootSeller.delete('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//delete shop
rootSeller.delete('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
exports.default = rootSeller;
