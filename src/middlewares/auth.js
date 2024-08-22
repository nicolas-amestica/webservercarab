require('dotenv').config();
const jwt = require("jsonwebtoken");
const moment = require("moment");

function isAuth(req, res, next) {

    try {
        if (!req.headers.authorization)
            return res.status(403).send({message: "No tiene autorización"});

        const token = req.headers.authorization.split(' ')[1];
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);

        if (!payload)
            return res.status(403).send({message: "No tiene autorización"});

        if (payload.exp <= moment().unix())
            return res.status(401).send({message: "El token a expirado"});

        next();
    } catch(err) {
        return res.status(403).send({message: "No tiene autorización"});
    }

}

module.exports = {
    isAuth
}