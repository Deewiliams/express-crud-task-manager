const Task = require('../models/Tasks') 
const getAllTasks = (req,res) => {
    res.send('all items')
}

const createTask = async (req,res) => {
    const task =  await Task.create( req.body)
     res.status(201).json({task})
}

const getTask = (req,res) => {
    res.send('get single tasks')
}

const updateTask = (req,res) => {
    res.send('update tasks')
}

const deleteTask = (req,res) => {
    res.send('delete tasks')
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask


}