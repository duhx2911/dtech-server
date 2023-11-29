const mysql = require("mysql");

exports.db = () => {
  // connect mysql
  const con = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "dtech",
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!");
  });
  return con;
};
