"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootClient = (0, express_1.Router)();
// create seller
rootClient.post('/register', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//get all order
rootClient.get('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//geet specifi order
rootClient.get('/id', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// get all order of specifi client
rootClient.get('/getorder/:id', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// add product 
rootClient.put('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// delete prodact
rootClient.delete('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//delete shop
rootClient.delete('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
exports.default = rootClient;
