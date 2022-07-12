const getAllTasks = (req,res) => {
    res.send('all items')
}

const createTask = (req,res) => {
     res.send('create tasks')
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