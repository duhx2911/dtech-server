const express = require("express");
const path = require("path");
var cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

const con = mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "dtech",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!");
});

app
  .route("/products")
  .get(function (req, res) {
    let sql = "SELECT * FROM products";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .post(function (req, res) {
    let sql = "insert into products set ?";
    const { body } = req;
    con.query(sql, body, function (err, response) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({
          status: "success",
          data: { ...body, id: response.insertId },
        });
      }
    });
  });

app.listen(port);
console.log("Server started at http://localhost:" + port);
