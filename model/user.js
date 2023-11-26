const mongoose = require('mongooose');
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
    mobile: {
        type: Number,
        required: [true, 'Mobile number is required']
    },
    roleID: {
        type: Number,
        default: 1
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('users', schema);

