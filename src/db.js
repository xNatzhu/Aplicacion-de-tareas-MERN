import mongoose from "mongoose";


const connectDB = async()=>{
    try{
        //Cuando la respuesta cargue se ejecuta
        await mongoose.connect("mongodb+srv://admin:Control2011@cluster0.yfmkz8m.mongodb.net/"); //Conexion de DB;
        
        console.log("CONEXION DB EXITOSA"); //test
    }catch(error){
        console.log(error);
    }
}

export {connectDB}