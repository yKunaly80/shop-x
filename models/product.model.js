const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    description: { type: String },
    ratings: { type: Number, min: 0, max: 5, default: 0 },
    stock_quantity: { type: Number, default: 0 },
    attributes: { type: Map, of: String }
})

module.exports = mongoose.exports('product',productSchema)