
import Task from "../model/task.model.js"


const getTasks = async (req, res) => {
    try {
        const tasksSearch = await Task.find({
            user: req.user.id // Traerá las tareas del usuario identificado
        }).populate("user"); // Relacionará con la colección "User" y traerá los datos del usuario.

        res.json(tasksSearch);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las tareas del usuario" });
    }
};

const getTask = async (req, res) => {
    try {
        const { id } = req.params;

        const taskSearch = await Task.findById(id);
        console.log(req.user.id, "probando");
        if (!taskSearch) {
            return res.status(404).json({ msg: "No se encontró id" });
        }

        return res.json(taskSearch);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la tarea" });
    }
};




const createTask = async (req, res) => {
    try {
        const { title, description, date, user } = req.body;
        console.log(req.body);
        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id,
        });
        console.log(newTask);
        const saveTask = await newTask.save();
        res.json(saveTask); // Envia la respuesta como JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar la tarea' });
    }
};



const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const taskSearchAndRemove = await Task.findByIdAndDelete(id);

        if (!taskSearchAndRemove) {
            return res.status(404).json({ msg: "No se encontró la tarea" });
        }

        return res.json(taskSearchAndRemove);
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const taskSearchAndUpdate = await Task.findByIdAndUpdate(id, req.body, {
            new: true // Exigimos la actualización del dato que se cargó en el body
        });

        if (!taskSearchAndUpdate) {
            return res.status(404).json({ msg: "No se encontró la tarea" });
        }

        return res.json(taskSearchAndUpdate);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la tarea" });
    }
};


export {getTasks, createTask, getTask,deleteTask, updateTask}