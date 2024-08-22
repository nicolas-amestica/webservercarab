const bcrypt = require('bcrypt');
const { pool } = require("../../helpers/mysql");
const fecha = require("../../common/get-date-time");

const createUser = async (user) => {  
    try {
        const query = `INSERT INTO USUARIO(USU_RUT, USU_PASSWORD, USU_NOMBRE, USU_APELLIDO_1, USU_APELLIDO_2) VALUES ("${user.USU_RUT}", "${await bcrypt.hash("temporal", 10)}", "${user.USU_NOMBRE}", "${user.USU_APELLIDO_1}", "${user.USU_APELLIDO_2}")`;
        const [result, fields] = await pool.query(query);
        return result
    } catch (error) {
        return { error };
    }
}

const deleteUser = async (rut) => {
    try {
        const query = `UPDATE USUARIO SET STATUS = 0, DELETED_AT = "${await fecha.getDateTime()}" WHERE USU_RUT = "${rut}"`;
        const [result, fields] = await pool.query(query);
        return result
    } catch (error) {
        return { error };
    }
}

const listUser = async (pathQuery) => {
    try {
        const query = `SELECT * FROM USUARIO WHERE 1 = 1 ${pathQuery}`;
        const [result, fields] = await pool.query(query);
        return result
    } catch (error) {
        return { error };
    }
}

const listUsers = async () => {
    try {
        const query = `SELECT * FROM USUARIO WHERE 1 = 1`;
        const [result, fields] = await pool.query(query);
        return result
    } catch (error) {
        return { error };
    }
}

module.exports = {
    createUser,
    deleteUser,
    listUser,
    listUsers
}