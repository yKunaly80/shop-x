class ApiError extends Error {
    constructor(statusCode, message, status, isOperational = true, stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.status = status;
        this.isOperational = isOperational;
        this.message = message;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError