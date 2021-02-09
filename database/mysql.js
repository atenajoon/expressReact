require('dotenv').config();

let config = {
    client: "mysql2",
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB,
        multipleStatements: true
    }
}

// there is a function in knex which we can pass "config" to it after instantiation and 
// it returns the connection it gets as a response
module.exports = require('knex')(config);