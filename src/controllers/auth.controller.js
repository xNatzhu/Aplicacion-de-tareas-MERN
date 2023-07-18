//Para guardar los datos en la DB vamos importar el modelo.

import User from "../model/user.model.js"
import bcrypt from "bcryptjs"
import createAccessToken from "../libs/jwt.js";
const register = async(req, res)=>{
    const {email, password, username} = req.body;

    //va crear los datos y lo va almacenar en la DB
    /*
        user.create({
        email,
        password,
        username
    });
    */
   try {

    //encriptacion de contraseña
    const passEncrypt = await bcrypt.hash(password, 10); 
    console.log(passEncrypt)
    const newUser = new User({
        username,
        email,
        password: passEncrypt
    });

    //espera que el objeto se almacena y lo guarda en la base de datos.
    await newUser.save()

    const token = await createAccessToken({id:newUser._id,})
    //almacenarlo en una cookie
    res.cookie("token", token)
    res.json({
        msg:"Usuario creado sactifactoriamente"
    })
    //el id del usuario, la clave del token, el tiempo de expiracion
    
   } catch (error) {

     res.send(error)
   }
};

const login = async(req, res)=>{
    const {email, password} = req.body;

   try {

    //busca al usuario
    const userFound = await User.findOne({email})
    
    if(!userFound){
        return res.status(400)
    }
    console.log(userFound, userFound.password)
    //compara la contraseña con la db
    const passCompare = await bcrypt.compare(password, userFound.password); 

    if(!passCompare){
        return res.status(400).json({msg:"Dato ingresado incorrecto"})
    }

    const token = await createAccessToken({id:userFound._id,})
    //almacenarlo en una cookie
    res.cookie("token", token)
    res.json({
        msg:"Usuario logeado correctamente"
    })
    //el id del usuario, la clave del token, el tiempo de expiracion
   /* res.json({
        username:newUser.username,
        email:newUser.email,
        password:newUser.passEncrypt
    })
    */

   } catch (error) {

     res.send(error)
   }
};

const logout = (req, res) =>{
    res.cookie("token", "");
    return res.status(200).json({msg:"Cerrar seccion"})
}

const profile = async(req, res)=>{
    const userFound = await User.findById(req.user.payload.id);
   if(!userFound){
    return res.status(400).json({msg:"Usuario no encontrado"})
   }
   return res.json({
        id:userFound._id,
        userName:userFound.username,
        email:userFound.email
   })
    
}

export {register, login, logout, profile}