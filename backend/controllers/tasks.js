const Task = require('../models/Tasks') 
const asyncWrapper = require('../middleware/async')
const {createCustomerError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async(req,res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

const createTask = asyncWrapper(async (req,res) => {
        const task =  await Task.create( req.body)
        res.status(201).json({task})
})

const getTask = asyncWrapper(async (req,res, next) => {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            // const error = new Error('Not Found')
            // error.status = 404
            // return next(error)
            // return res.status(404).json({mes:`No task with id: ${taskID}`})
            return next(createCustomerError(`No task with id: ${taskID}`, 404))
        }
        res.status(200).json({task})
})

const updateTask = asyncWrapper(async (req,res,next) => {
        const {id:taskID} = req.params;
        const task = await fineOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        if(!task){
            return next(createCustomerError(`No task with id: ${taskID}`, 404))
        }
        res.status(200).json({task})
})

const deleteTask = asyncWrapper(async(req,res, next) => { 
        const {id:taskID} = req.params
        const task = await Task.deleteOne({_id: taskID })
        if(!task){
            return next(createCustomerError(`No task with id: ${taskID}`, 404))
        }
        res.status(200).json({task})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}