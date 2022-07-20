const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employee.controller')

router.route('/')
    .get(EmployeeController.showEmployees)
    .post(EmployeeController.createEmployee)

router.route('/conjunto')
    .post(EmployeeController.organizeddEmployee)


module.exports = router