import mongoose, { Schema, SortOrder } from "mongoose"
import { IProject, projectSchema } from "./projectSchema"
import { IOrder, orderSchema } from "./orderSchema"

export interface IStore {
    name: string,
    owner: mongoose.Types.ObjectId
    objects: mongoose.Types.ObjectId[],
    orders: mongoose.Types.ObjectId[]
    isActiv:boolean
}

export const storeSchema = new Schema<IStore>({
    name:{
        type: String,
        required: [true, "enter name for project"],
        min: [2, "name is shorts"]
    },
    owner:{
        type: Schema.ObjectId,
        required: [true, "enter id owner"],
    },
    objects:{
        type: [mongoose.Schema.Types.ObjectId],
        required: [true, "enter id of order"],
        ref: "Project"
    },
    orders:{
        type: [mongoose.Schema.Types.ObjectId],
        required: [true, "enter id of order"],
        ref: "Order"
    },

    isActiv:{
        type: Boolean,
        required: [true, "enter status store"],
    }
})

const StoreModel: mongoose.Model<IStore> =  mongoose.model<IStore>("Store" ,storeSchema)

export default StoreModel