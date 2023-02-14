const jwt = require('jsonwebtoken')
const ErrorResponse = require('../utils/ErrorResponse')
const {models} = require('../config/sequelize')

const authorization = async (req,res,next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    // Make sure token exists
    if(!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401))
    }
    try {
        // veryfy token
        const decoded = jwt.verify(token, process.env.JWT_SEED);
        req.user = await models.User.findByPk(decoded.id);
        next();
    } catch (error) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
}



exports.authorization = authorization