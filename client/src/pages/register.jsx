import {useForm} from "react-hook-form"
import { registerRequest } from "../api/auth.js";
export default function Register() {
    // funciones - user form - destructuracion
    const {register, handleSubmit} = useForm()
    return(
        <div className="w-full flex justify-center">
            <div className="w-[500px] bg-slate-400">
            </div>
            <div className="bg-slate-100 p-[10px]">
                <h2 className="text-[35px] text-center text-orange-500 font-bold">Registro de cuenta</h2>
                <form className="flex flex-col w-[500px]"  onSubmit={ handleSubmit(async (values)=> {
                    console.log(values);
                    const valueRegister = await registerRequest(values)
                    console.log(valueRegister);
                })}>
                    <input className="bg-neutral-300 mt-[10px] pt-[10px] pb-[10px] px-[25px]" type="text" name="username" {...register("username", {required:true})}/>
                    <input className="bg-neutral-300 mt-[10px] pt-[10px] pb-[10px] px-[25px]" type="email" name="email" {...register("email", {required:true})}/>
                    <input className="bg-neutral-300 mt-[10px] pt-[10px] pb-[10px] px-[25px]"type="password" name="password" {...register("password", {required:true})}/>
                    <button type="submit">Registar</button>
                </form>
            </div>
        </div>
    )
}