const express = require('express')
const userController = require('../controllers/user.controller')
const validation = require('../middlewares/validation.middleware')
const { validate } = require('express-validation')
const router = express.Router()

router.get('/users', userController.getAllUsers)
router.post('/createUser',validate(validation.createUser), userController.user)

module.exports = router 