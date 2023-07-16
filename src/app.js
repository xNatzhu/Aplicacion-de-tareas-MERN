import express from "express";
import morgan from "morgan";
import router from "./routes/auth.routes.js"

const app = express();
const port = 3000

app.use(express.json()); //va convertir los datos enviado al body en un objeto de JS.

app.use("/api",router) //va estar usando las rutas.

app.use(morgan("dev")) //nos dara en consola texto sobre los movimientos a las peticiiones que hagamos.
export {port, app};