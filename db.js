const mysql = require("mysql2");

exports.db = () => {
  // connect mysql
  const con = mysql.createConnection({
    host: process.env.DB_HOST || "sql.freedb.tech",
    port: 3306,
    user: process.env.DB_USER || "freedb_duhx2911",
    password: process.env.DB_PASSWORD || "GrrMhY@mx2&vJT?",
    database: process.env.DB_NAME || "freedb_d-tech",
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!");
  });
  return con;
};
