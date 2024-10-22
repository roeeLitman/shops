"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletss = exports.update = exports.getAllSeller = exports.createStore = void 0;
const createStore = async (req, res) => {
    const newStore = await StoreService.createStore();
};
exports.createStore = createStore;
const getAllSeller = async (req, res) => { };
exports.getAllSeller = getAllSeller;
const update = async (req, res) => { };
exports.update = update;
const deletss = async (req, res) => { };
exports.deletss = deletss;
