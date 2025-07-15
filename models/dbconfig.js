const mysql = require('mysql2');
require('dotenv').config();
var dbconnection = mysql.createConnection({
    host:     process.env.DB_HOSTSERVER,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port:     process.env.DB_PORTNUMBER
});
dbconnection.connect( (err) => {
    if (err) throw err;
    console.log("Database connected.");
});
module.exports = dbconnection;
//npm install mysql2 dotenv @terminal