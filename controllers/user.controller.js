// const express = require('express')
const userQuery = require('../queries/user.query')
const asyncHandler = require('../utils/asyncHandler')

// exports.crateUser = catchAsync((req, res, next) => {
//     userQuery.createUser(
//         req.body.firstName,
//         req.body.lastName,
//         req.body.emailAddress,
//         req.body.mobileNumber,
//         req.body.password,
//     ).then((response) => {
//         res.status(response.statusCode).json(response);
//     }).catch((err) => {
//         console.error(err);
//         next(err);
//     });
// })

const user = asyncHandler(async (req, res, next) => {
    try {
    const { firstName, lastName, emailAddress, mobileNumber, password } = req.body;
    const response = await userQuery.createUser(
        firstName, lastName, emailAddress, mobileNumber, password
    )
    res.status(response.statusCode).json(response);
    } catch (error) {
        next(error)
    }
})

// exports.crateUser = catchAsync((req, res, next) => {
//     userQuery.createUser(
//         req.body.firstName,
//         req.body.lastName,
//         req.body.emailAddress,
//         req.body.mobileNumber,
//         req.body.password,
//     ).then((response) => {
//         res.status(response.statusCode).json(response);
//     }).catch((err) => {
//         console.error(err);
//         next(err);
//     });
// })

const getAllUsers = async (req, res, next) => {
    console.log('call==>');
    res.send({
        name: 'Kunal Bera',
        age: 22
    })
    // Promise.resolve()
}

module.exports = {
    user,
    getAllUsers
}
