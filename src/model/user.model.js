//Tablas de mongo db

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true // permite que el mail sea unico.
    },
    password:{
        type:String,
        require:true
    }
})

export default mongoose.model("User", userSchema)





