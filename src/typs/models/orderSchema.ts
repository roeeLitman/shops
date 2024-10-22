import mongoose, { Schema } from "mongoose"
import { IProject } from "./projectSchema"

export interface IOrder {
    project: mongoose.Types.ObjectId
    send: Date
    arrived: Date
}

export const orderSchema = new Schema<IOrder>({
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required:[true, "you dont enter id of object"]   
    },
    send: {
        type: Date,
        required:[true, "enter time"]   
    },
    arrived: {
        type: Date,
        required: false,  
    }

})

const OrderModel: mongoose.Model<IOrder> =  mongoose.model<IOrder>("Order" ,orderSchema)

export default OrderModel