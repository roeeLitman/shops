"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storeController_1 = require("../controller/storeController");
const rootStore = (0, express_1.Router)();
// create seller
rootStore.post('/create', storeController_1.createStore);
//get all order
rootStore.get('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//geet specifi order
rootStore.get('/id', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// get all order of specifi client
rootStore.get('/getorder/:id', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// add product 
rootStore.put('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
// delete prodact
rootStore.delete('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
//delete shop
rootStore.delete('/', async (req, res) => {
    try {
    }
    catch (err) {
    }
});
exports.default = rootStore;
