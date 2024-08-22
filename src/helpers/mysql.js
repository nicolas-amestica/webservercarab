require('dotenv').config();
const {createPool} = require('mysql2/promise');

const pool = createPool({
    port: "3306",
    host: process.env.MYSQLDB_HOST,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
})

module.exports = {
    pool
}
