const {models} = require('../config/sequelize')


exports.showEmployees = async (req,res) => {
    try {
        const employees = await models.Employee.findAll({
            include: ['projects']
        })
        return res.json({
            success: true,
            data: employees
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.createEmployee = async (req,res) => {
    try {
        const employee = await models.Employee.create(req.body)
        return res.json({
            success: true,
            data: employee
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.organizeddEmployee = async (req,res) => {
    console.log(req.body)
    const conjuto = await models.EmployeeProject.create({
        "employeeId": req.body.employeeId,
        "projectId": req.body.projectId
    })
    return res.status(201).json({
        success: true,
        data: req.body
    })
}