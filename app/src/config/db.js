const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();
module.exports = db;


// const mysql = require('mysql2/promise');


// module.exports = {
//     pool: pool
// };