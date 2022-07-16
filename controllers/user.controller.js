const {models} = require('../config/sequelize')

exports.showUsers = async (req,res) => {
    const users = await models.User.findAll()
    return res.status(200).json({
        success: true,
        count: users.length,
        data: users
    })
}

exports.createUser = async (req,res) => {
    try {
        const user = await models.User.create(req.body)
        return res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        console.log(error)
        return  res.status(500).json({
            success: false,
            message: error.message
        })
    }

}