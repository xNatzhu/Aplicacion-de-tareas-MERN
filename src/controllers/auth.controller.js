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

    const newUser = new User({
        username,
        email,
        passEncrypt
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

const login = (req, res)=>{
    res.send("login");
}


export {register, login}