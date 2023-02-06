const Pool = require('pg').Pool

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "blog_database",
    password : "nikhil",
    port : 5432
})

module.exports = pool