const {models} = require('../config/sequelize')


exports.showEmployees = async (req,res) => {
    try {
        const employees = await models.Project.findAll()
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
        const employee = await models.Project.create(req.body)
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