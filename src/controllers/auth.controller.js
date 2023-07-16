//Para guardar los datos en la DB vamos importar el modelo.

import User from "../model/user.model.js"


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

    const newUser = new User({
        username,
        email,
        password
    });

    //espera que el objeto se almacena y lo guarda en la base de datos.
    await newUser.save()

   } catch (error) {

     res.send(error)
   }
};

const login = (req, res)=>{
    res.send("login");
}


export {register, login}