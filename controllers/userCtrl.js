const userRepo = require('../repositories/userRepo');


const signUp = async (req, res) => {
    try {
        const body = req.body;
        await userRepo.add(body);
        res.status(201).send('User Created');
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};



module.exports = {
    signUp
}