import { IProject } from "./projectSchema"

export interface IOrder {
    project: IProject
    send: Date
    arrived: Date

}