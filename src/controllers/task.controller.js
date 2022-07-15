const taskModel = require('../models/task.model')


exports.showAllTask = async (req,res,next) => {
    try {
        const tasks = await taskModel.findAll()
        return res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'do not bring the tasks'
        })
    }
}

exports.createTasks = async (req,res,next) => {
    try {
        const task = await taskModel.create(req.body)
        return res.status(200).json({
            success: true,
            data: task
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'do not create the tasks'
        })
    }
}