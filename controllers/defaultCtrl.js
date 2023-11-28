const home = (req, res) => {
    res.status(200);
    res.send('Welcome to Grocer\'s Yard');
};

const health = (req, res) => {
    if (req.role == 2) {
        res.status(200);
        res.json({
            Status: "Up and Running"
        })

    } else {
        res.status(401).send('Your role is not to access here')
    }
}






module.exports = {
    home,
    health
}