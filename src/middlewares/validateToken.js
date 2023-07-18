import jwt from "jsonwebtoken";
import { tokenSecret } from "../config.js";

const authRequire = (req, res, next) =>{
    const {token} = req.cookies
    console.log( "Context",token);
    if(!token){
        return res.status(404).json({msg:"autorizacion denegado"});
    }
    //tiene un metodo que verifica el token
    jwt.verify(token, tokenSecret, (error, user)=>{
        if(error){
            return res.status(404).json({msg:"autorizacion denegado"}); 
        }
        console.log("Almacenamiento del usuario de la validacion", user)
        req.user = user
        next()
    });
    
}

export default authRequire