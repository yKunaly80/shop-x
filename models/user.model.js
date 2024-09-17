const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    emailId: { type: String, require: true, unique: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    mobileNumber: { type: String, require: true },
    password: { type: String, require: true }
})

module.exports = mongoose.model('user', userSchema)