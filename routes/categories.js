const express = require("express");
const router = express.Router();
const { db } = require("../db");
const con = db();

router.get("/categories", function (req, res) {
  let sql = "SELECT * FROM categories";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.post("/categories", function (req, res) {
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

router.put("/category/:id", function (req, res) {
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
});
router.delete("/category/:id", function (req, res) {
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
module.exports = router;
