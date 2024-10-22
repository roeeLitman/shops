"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storeSchema_1 = __importDefault(require("../typs/models/storeSchema"));
class StoreService {
    static async createStore(storFromReq) {
        try {
            //chck if have last then 2 store
            //crete new store 
            const newSeller = await new storeSchema_1.default(storFromReq);
            await newSeller.save();
            console.log(newSeller);
            return {
                err: false,
                status: 200,
                data: newSeller,
                msege: `user: ${newSeller.name} is created`
            };
        }
        catch (err) {
            return {
                err: true,
                status: 400,
                data: err,
            };
        }
    }
}
exports.default = SelerService;
