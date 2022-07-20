const { models } = require('../config/sequelize');

exports.createAddress = async (req,res,next) => {
    try {
        const address = await models.Address.create(req.body)
        return res.status(201).json({
            success: true,
            data: address
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.getAllAddressForUsers = async (req,res,next) => {
    try {
       const address = await models.Address.findAll({
           include: 'user'
       })
        return res.status(200).json({
            success: true,
            count: address.length,
            data: address
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}