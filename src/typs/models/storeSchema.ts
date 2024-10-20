import mongoose from "mongoose"

export interface IStore {
    name: string,
    object: object[],
    imge?: string,
    store: mongoose.Types.ObjectId
}