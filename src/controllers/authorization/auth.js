require('dotenv').config();
const authorization = require("../../services/authorization/auth");

const login = async(req, res) => {
    console.log(req);
    try {
        const { USU_RUT, USU_PASSWORD } = req.body
        if (!USU_RUT || !USU_PASSWORD) throw "Faltan parámetros de entrada";
        
        const credentials = {
            USU_RUT,
            USU_PASSWORD
        }
        const result = await authorization.login(credentials);
        if (result.error) throw (result.error);
        res.status(200).send({ message: 'Usuario autenticado correctamente', result })
    } catch (e) {
        res.status(403).send({ message: "Error al iniciar sesión", error: e })
    }
}

module.exports = {
    login
}