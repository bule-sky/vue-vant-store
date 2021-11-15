var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: process.env.STORE_USER || 'root',
  password: process.env.STORE_PASSWORD,
  database: 'auuEEqKO2s'
});

connection.connect();

module.exports = connection;
