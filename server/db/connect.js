var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.STORE_HOST || 'localhost',
  user: process.env.STORE_USER || 'root',
  password: process.env.STORE_PASSWORD || 'root',
  database: process.env.STORE_DATABASE || 'store'
});

connection.connect();

module.exports = connection;
