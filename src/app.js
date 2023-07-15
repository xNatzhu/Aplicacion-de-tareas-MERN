import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000





app.use(morgan("dev")) //nos dara en consola texto sobre los movimientos a las peticiiones que hagamos.
export {port, app};