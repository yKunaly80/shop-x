const mongoose = require('mongoose')
const httpStatus = require('http-status')
const ApiError = require('../utils/apiError')

const errorConverter = (err, req, res, next) => {
    let error = err

    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR
        const message = error.message || httpStatus[statusCode]
        error = new ApiError(statusCode, message, false, false, error.stack)
    }
    next(err)
}

const errorHandler = (err, req, res, next) => {
    let { statusCode, message, status } = err

    if (!err.isOperational) {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    }
    res.locals.errorMessage = err.message;

    const response = {
        statusCode,
        message,
        status,
        stack: err.stack
    }
    res.status(statusCode).send()
}

module.exports = {
    errorConverter,
    errorHandler,
};