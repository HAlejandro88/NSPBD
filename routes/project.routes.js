const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/project.controller')

router.route('/')
    .get(ProjectController.showEmployees)
    .post(ProjectController.createEmployee)


module.exports = router