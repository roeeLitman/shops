import mongoose from "mongoose"

export interface IProject {
    name: string,
    prase: number,
    imge?: string,
    store: mongoose.Types.ObjectId
}