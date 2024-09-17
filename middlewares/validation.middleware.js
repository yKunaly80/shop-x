const { Joi } = require('express-validation');

const createUser = {
    body: Joi.object({
        emailAddress: Joi.string().email().required(),
        password: Joi.string().regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).required(),
        mobileNumber: Joi.string().regex(/^[6-9]\d{9}$/).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
    })
}

module.exports = {
    createUser
};