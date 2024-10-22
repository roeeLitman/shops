import mongoose, { Schema } from 'mongoose'
import { IOrder, orderSchema } from './orderSchema'

export interface IUser{
    name: string,
    password:string,
    email: string
    store: mongoose.Types.ObjectId[]
    yourOrder: IOrder []
    isActiv: Boolean
}

export const userSchema = new Schema<IUser>({
    name:{
        type: String,
        required: [true, "enter name for project"],
        min: [2, "name is shorts"]
    },
    password:{
        type: String,
        required: [true, "enter password"],
    },
    email:{
        type: String,
        required: [true, "enter prase"],
    },
    store:{
        type: [Schema.Types.ObjectId],
        required: [true, 'enter id store']
    },

    yourOrder:{
        type: [orderSchema],
        required: [true, 'enter id store']
    },

    isActiv:{
        type: Boolean,
        required: [true, "enter status store"],
    }
})

const StoreModel: mongoose.Model<IUser> =  mongoose.model<IUser>("Store" ,userSchema)

export default StoreModel