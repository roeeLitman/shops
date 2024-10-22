import mongoose, { Schema } from "mongoose"

export interface IProject {
    name: string,
    prase: number,
    store?: mongoose.Types.ObjectId
    imge?: string,
}

export const projectSchema = new Schema<IProject>({
    name:{
        type: String,
        required: [true, "enter name for project"],
        min: [2, "name is shorts"]
    },
    prase:{
        type: Number,
        required: [true, "enter prase"],
        min: [2, "name is shorts"]
    },
    imge:{
        type: String,
        required: false,
    },

    store:{
        type: Schema.Types.ObjectId,
        required: [true, "id store is mising"],
        ref: "Store"
    }
})

const ProjectModel: mongoose.Model<IProject> =  mongoose.model<IProject>("Project" ,projectSchema)

export default ProjectModel