import {z} from "zod";

const registerSchema = z.object({
    username:z.string({
        required_error:"Username is required",
    }),
    email:z.string({
        required_error:"Email is required",
    }),
    password:z.string({
        required_error:"Email is required",
    }).min(6,{
        msg:"Password must be at least 6 characters",
    }),
})

const loginSchema = z.object({
    email:z.string({
        required_error:"Email is required",
    }).email({
        msg: "Invalid email"
    }),
    password:z.string({
        required_error:"Email is required",
    }).min(6,{
        msg:"Password must be at least 6 characters",
    }),
})


export {loginSchema, registerSchema}