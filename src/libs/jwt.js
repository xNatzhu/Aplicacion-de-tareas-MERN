import jwt from "jsonwebtoken";
import { tokenSecret } from "../config.js";
function createAccessToken(payload){
    return new Promise((resolve, reject)=>{
        jwt.sign(
            {
                payload,
            },
            tokenSecret,
            {
            expiresIn:"1d" // Expira en un dia
        },
        (err, token)=>{
            if(err){
                console.log(err);
                reject(err)
            }
            resolve(token);
        }
        )
    })
}

export default createAccessToken