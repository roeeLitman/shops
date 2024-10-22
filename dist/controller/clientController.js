"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createSeller = async (req, res) => {
    try {
        const newSeler = async, SelerService, create;
        (req.body);
        res.status(newSeler.status).json(newSeler);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
const getAllSeller = async (req, res) => { };
const update = async (req, res) => { };
const deletss = async (req, res) => { };
