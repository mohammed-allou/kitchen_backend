const mysql = require('mysql');
const { BDD_HOST, BDD_USER, BDD_PASSWORD, BDD_DATABASE } = require('./constants')

const connection = mysql.createConnection({
    host: BDD_HOST,
    user: BDD_USER,
    password: BDD_PASSWORD,
    database: BDD_DATABASE
});

module.exports = connection;