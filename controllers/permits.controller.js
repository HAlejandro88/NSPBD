const { models } = require('../config/sequelize');


exports.getAllPermits = async (req,res,next) => {
    try {
        const permits = await models.Permits.findAll({
            include: ['user']
        })
        return res.status(200).json({
            success: true,
            count: permits.length,
            data: permits
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.createPermitsForUser = async (req,res,next) => {
    try {
        const permitForUser = await models.Permits.create(req.body);
        return res.status(201).json({
            success: true,
            data: permitForUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}