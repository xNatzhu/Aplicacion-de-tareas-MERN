import {useForm} from "react-hook-form"
import { registerRequest } from "../api/auth.js";
export default function Register() {
    // funciones - user form - destructuracion
    const {register, handleSubmit} = useForm()
    return(
        <div>
            <form  onSubmit={ handleSubmit(async (values)=> {
                console.log(values);
                const valueRegister = await registerRequest(values)
                console.log(valueRegister);
            })}>
                <input type="text" name="username" {...register("username", {required:true})}/>
                <input type="email" name="email" {...register("email", {required:true})}/>
                <input type="password" name="password" {...register("password", {required:true})}/>
                <button type="submit">Registar</button>
            </form>
        </div>
    )
}