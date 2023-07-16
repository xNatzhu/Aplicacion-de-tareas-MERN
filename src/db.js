import mongoose from "mongoose";


const connectDB = async()=>{
    try{
        //Cuando la respuesta cargue se ejecuta
        await mongoose.connect("mongodb+srv://admin:Control2011@cluster0.yfmkz8m.mongodb.net/"); //Conexion de DB;
        
        console.log("CONEXION DB EXITOSA"); //test
    }catch(error){
        
        res.status(500).json({
            success: false,
            message: "An error occurred while registering the user.",
            error: error.message,
          });

        console.log(error);
    }
}

export {connectDB}