const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task.controller')

router.route('/')
    .get(taskController.showAllTask)
    .post(taskController.createTasks)


module.exports = router