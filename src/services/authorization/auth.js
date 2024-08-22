require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { pool } = require("../../helpers/mysql");

const login = async (credentials) => {  
    try {
        const query = `SELECT * FROM USUARIO WHERE 1 = 1 AND STATUS = 1 AND USU_RUT="${credentials.USU_RUT}"`;
        const [[result], fields] = await pool.query(query);
        if(!result) throw "Credenciales no válidas";

        const compare = await bcrypt.compare(credentials.USU_PASSWORD, result.USU_PASSWORD)
        if(!compare) throw "Credenciales no válidas";

        delete result.USU_PASSWORD;
        
        const TOKEN = jwt.sign(result, process.env.SECRET_TOKEN);
        
        return {...result, TOKEN};
    } catch (error) {
        return { error };
    }
}

module.exports = {
    login
}