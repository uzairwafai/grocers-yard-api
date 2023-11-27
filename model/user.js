const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    firstName: {
        type: String,
       required: [true, 'First name is required']
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
       required: true
    },
    phoneNo: {
        type: Number,
       required: [true, 'Phone number is required']
    },
    roleId: {
        type: Number,
        default: 1
    }
}, { timestamps: true });

module.exports = mongoose.model('users', schema);

