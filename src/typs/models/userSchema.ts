import mongoose, { Schema } from 'mongoose'
import { IOrder, orderSchema } from './orderSchema'

export interface IUser{
    name: string,
    password:string,
    email: string
    store: mongoose.Types.ObjectId[]
    yourOrder: mongoose.Types.ObjectId
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
        type: Schema.Types.ObjectId ,
        ref: 'Order',
        required: [true, 'enter id store']
    },

    isActiv:{
        type: Boolean,
        required: [true, "enter status store"],
    }
})

const UserModel: mongoose.Model<IUser> =  mongoose.model<IUser>("User" ,userSchema)

export default UserModel