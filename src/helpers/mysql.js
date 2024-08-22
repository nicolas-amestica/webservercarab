require('dotenv').config();
const {createPool} = require('mysql2/promise');

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USUARIO,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_DOCKER_PORT,
})

module.exports = {
    pool
}
