const express = require("express");
const path = require("path");
var cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;
const { db } = require("./db");
const router = require("./auth/auth.routes");

const authMiddleware = require("./auth/auth.middlewares");
app.use(cors());

const con = db();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/auth", router);

app.route("/staff").get(function (req, res) {
  let sql = "SELECT * FROM staff";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
app
  .route("/staff/:staffId")
  .get(function (req, res) {
    let sql = "SELECT * FROM staff where id =?";
    const { staffId } = req.params;
    con.query(sql, staffId, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .put(authMiddleware.isAuth, function (req, res) {
    let sql = "UPDATE staff SET ? WHERE id=?";
    const { body, params } = req;
    const { staffId } = params;
    con.query(sql, [body, staffId], (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: body });
      }
    });
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
app
  .route("/product/:productId")
  .put(function (req, res) {
    let sql = "UPDATE products SET ? WHERE id=?";
    const { body, params } = req;
    const { productId } = params;

    con.query(sql, [body, productId], function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: body });
      }
    });
  })
  .delete(function (req, res) {
    const sql = "DELETE FROM products WHERE id=?";
    const { productId } = req.params;

    con.query(sql, productId, function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: productId });
      }
    });
  });

// Categories
app
  .route("/categories")
  .get(function (req, res) {
    let sql = "SELECT * FROM categories";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .post(function (req, res) {
    let sql = "insert into categories set ?";
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

app
  .route("/category/:id")
  .put(function (req, res) {
    let sql = "UPDATE categories SET ? WHERE id=?";
    const { body, params } = req;
    const { id } = params;

    con.query(sql, [body, id], function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: body });
      }
    });
  })
  .delete(function (req, res) {
    let sql = "DELETE FROM categories WHERE id=?";
    const { id } = req.params;
    con.query(sql, id, function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: id });
      }
    });
  });

app.listen(port);
console.log("Server started at http://localhost:" + port);
