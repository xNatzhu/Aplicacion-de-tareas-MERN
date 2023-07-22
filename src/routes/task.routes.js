import {Router} from "express";
import authRequire from "../middlewares/validateToken.js";
import {getTasks, createTask, getTask,deleteTask, updateTask} from "../controllers/task.controller.js";
const router = Router()

router.post("/tasks", authRequire, createTask )
router.get("/tasks", authRequire, getTasks)
router.get("/tasks/:id", authRequire, getTask)
router.delete("/tasks/:id", authRequire, deleteTask)
router.put("/tasks/:id", authRequire, updateTask)


export default router