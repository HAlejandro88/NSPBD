const ErrorResponse = require('../utils/ErrorResponse')
const debug = require('debug')('sequelize-tuto:errorMidd');

const errorHandler = (err, req, res, next) => {

    let error = { ...err };
    error.message

    // log to console for dev
    //debug(error);


    if (err.name === 'CastError') {
        const message = `Resource not found with ${err.value}`;
        error = new ErrorResponse(message, 404)
    }

    if(err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }


    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400 );
    }

    return res.status(err.statusCode || 500 ).json({
        success: false,
        error: err.message || 'server error'
    });
}

module.exports = errorHandler