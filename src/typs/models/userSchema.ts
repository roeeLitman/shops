import mongoose, { Schema } from 'mongoose'
import { IOrder } from './orderSchema'

export interface IUser{
    name: string,
    password:string,
    email: string
    store: mongoose.Types.ObjectId[]
    yourOrder: IOrder []
    isActiv: Boolean
}