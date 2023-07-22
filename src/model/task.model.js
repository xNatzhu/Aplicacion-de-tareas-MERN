//Tablas de mongo db

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, // HACE REFERENCIA QUE NECESITAMOS EL ID QUE SE ENCUENTRA EN EL OTRO MODELO ESTAMOS REFERENCIANDO
        ref:"User", //la tabla donde se encuentra
    },
    date:{
        type:Date,
        default: Date.now,
    },
    category:{
        type:String,
        default:"none",
    },
    progress:{
        type:String,
        default:"En Progreso",
    }
},{
    timestamps:true
})

export default mongoose.model("Task", taskSchema)