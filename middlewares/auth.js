const jwt = require('jsonwebtoken');

function tokenAuth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) res.status(401).send('Unauthorized');
        else {
            const tokenStr = authHeader.split(' ');  //  Bearer skdfsdjkfhsdkj
            const token = tokenStr[1];

            const decodedToken = jwt.verify(token, 'secret');  //same secret string as at the time of generation
            console.log(decodedToken);
            const role = decodedToken.roleId;
            console.log(req.role);
            req.role=role;
            console.log(req.role);
            next();
        }
    }
    catch (err) {
        res.status(401).send('Not Authorized');
    }

}



module.exports = {
    tokenAuth
}