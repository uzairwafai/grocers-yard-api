const userRepo = require('../repositories/userRepo');
const jwt = require('jsonwebtoken');


const signUp = async (req, res) => {
    try {
        const body = req.body;
        await userRepo.add(body);
        res.status(201).send('User Created');
    }
    catch (err) {
        if (err.message && err.message.indexOf('duplicate key error') > -1) {
            res.status(409).send('Email already Exists');
        }
        else if (err.message && err.message.indexOf('users validation failed') > -1) {
            res.status(400);
            res.json(err.errors);
        }
        else {

            console.error(err);
            res.status(500).send(err.message);
        }
    }
};

const signIn = async (req, res) => {
    try {
        const user = await userRepo.get(req.body);
        if (user) {
            const token = jwt.sign({ email: user.email, roleId: user.roleId }, 'secret', { expiresIn: '1d' });
            res.status(200).json({ Token: token });
        } else {
            res.status(401).send('Wrong email or password');
        }

    } catch (err) {
        res.status(500).send('Internal server error');
    }
}




module.exports = {
    signUp,
    signIn
}