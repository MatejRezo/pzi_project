require("dotenv").config()
const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_DATABASE,
} = process.env

const mysql = require('mysql');
const db = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE
});



module.exports = { db }