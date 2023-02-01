const mysql = require("mysql2")
const connection = mysql.createConnection
({
        host:      process.env.DB_HOST     ||  "localhost",
        user:      process.env.DB_USER     ||  "root",
        password:  process.env.DB_PASSWORD ||  "Joseale12perez!",
        database:  process.env.DB_NAME     ||  "railway",
        port:      process.env.DB_PORT     ||  3306
});

connection.connect(function(error)
{
    if(error){console.log(error)}
    else{console.log("conexion correcta")}
})

module.exports = connection;