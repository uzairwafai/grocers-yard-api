const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    roleId: {
        type: Number,
        required: true
    },
    roleName: {
        type: String,
        required: true
    },
    canManageSystem: {
        type: Boolean,
        default: false
    },
    canReadProducts: {
        type: Boolean,
        default: true
    },
    canUpdateProducts: {
        type: Boolean,
        default: false
    },
    canReadUserOrders: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('roles',schema);