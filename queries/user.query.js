const httpStatus = require('http-status');
const userModel = require('../models/user.model')
const ApiError = require('../utils/apiError')


const createUser = async (firstName, lastName, emailAddress, mobileNumber, password) => {
    try {
        console.log(firstName, lastName, emailAddress, mobileNumber, password);
        const checkUserExist = await userModel.findOne({ emailId: emailAddress })
        if (checkUserExist) {
            return Promise.reject(new ApiError(409, 'User already exist', false))
        }
        const userData = {
            emailId: emailAddress,
            firstName,
            lastName,
            mobileNumber,
            password
        }
        const createUser = await userModel.create(userData)
        if (createUser) {
            return Promise.resolve({ status: true, statusCode: httpStatus.OK, message: 'User Registered Successfully' })
        }
        return Promise.reject(new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Internal Server Error',false))
    } catch (error) {
        console.log('error==>', error)
        return Promise.reject(error)
    }
}

module.exports = {
    createUser
}