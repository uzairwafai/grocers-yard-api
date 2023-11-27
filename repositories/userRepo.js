const User = require('../model/user');

const add = (payload) => {
    const user = new User(payload);
    return user.save();
};






module.exports={
    add
}