import {useForm} from "react-hook-form"
import { registerRequest } from "../api/auth.js";
import '../components/register/css/Form.css'
export default function Register() {
    // funciones - user form - destructuracion
    const {register, handleSubmit} = useForm()
    return(
        <div className="w-full flex justify-center h-screen items-center bg-slate-900">
            <div className="flex flex-row rounded-br-20">
                <div className="w-[370px] bg-gradient-to-br from-pink-500 to-orange-400 flex flex-col h-auto items-center justify-center px-[20px] border-radius-left">
                    <h2 className="text-[32px] text-center text-neutral-200 font-bold">¡Te damos la bienvenida de vuelta!</h2>
                    <p className="text-gray-100 text-center mt-[20px]" >Para ingresar a la plataforma, es imprescindible iniciar sesión utilizando los datos previamente registrados.</p>
                    <button className="text-white font-medium rounded-full text-sm px-[30px] py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 mt-[20px] border dark:border-gray-100 " type="submit">Iniciar Seccion</button>
                </div>
                <div className="bg-slate-100 p-[50px] border-radius-right">
                    <h2 className="text-[32px] text-center text-orange-500 font-bold mb-[20px]">¡Únete ahora!</h2>
                    <form className="flex flex-col w-[400px] items-center px-[60px]"  onSubmit={ handleSubmit(async (values)=> {
                        console.log(values);
                        const valueRegister = await registerRequest(values)
                        console.log(valueRegister);
                    })}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name username" {...register("username", {required:true})} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email"name="floating_last_name username email" {...register("email", {required:true})} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name password" {...register("password", {required:true})} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                        </div>
                        
                        <button className="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-[30px] py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 mt-[10px]" type="submit">Crear Cuenta</button>
                    </form>

                </div>
            </div>
        </div>
    )
}