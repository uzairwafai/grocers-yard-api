const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
    }
}, { timestamps: true });


module.exports = mongoose.model('products', schema)