const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    mobile_nummber: { type: Number, require: true },
    password: { type: String, require: true }
})

module.exports = mongoose.model('user', userSchema)