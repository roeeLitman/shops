import mongoose, { Schema, Document } from 'mongoose'
import { IOrder, orderSchema } from './orderSchema'
import { role } from '../enums/role'

export interface IUser extends Document {
    name: string,
    password:string,
    email: string
    store?: mongoose.Types.ObjectId[]
    yourOrder?: mongoose.Types.ObjectId
    role: role,
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
        required: false
    },

    yourOrder:{
        type: Schema.Types.ObjectId ,
        ref: 'Order',
        required: false
    },

    role:{
        type: String,
        required: [true, "enter role"],
        enum: [role.client, role.seller]
    },

    isActiv:{
        type: Boolean,
        required: [true, "enter status store"],
        default: () => {return true },
    }
})

const UserModel: mongoose.Model<IUser> =  mongoose.model<IUser>("User" ,userSchema)

export default UserModel