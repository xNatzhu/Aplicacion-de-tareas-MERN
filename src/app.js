import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import taskRouter from "./routes/task.routes.js";

//para poder observar las cookies:
import cookieParser from "cookie-parser";

const app = express();
const port = 3000

app.use(express.json()); //va convertir los datos enviado al body en un objeto de JS.

app.use(morgan("dev")) //nos dara en consola texto sobre los movimientos a las peticiiones que hagamos.

//conviere la coockie en un objeto json.
app.use(cookieParser())

app.use("/api", authRouter);
app.use("/api", taskRouter);


export {port, app};