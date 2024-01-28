const express = require("express");
const router = express.Router();
const { db } = require("../db");
const con = db();

router.post("/discount", function (req, res) {
  let sql = "INSERT INTO  promotion SET ?";
  const { body } = req;
  con.query(sql, body, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});
router.get("/discount", function (req, res) {
  let sql = "SELECT * FROM promotion";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.put("/discount/:categoryId", function (req, res) {
  let sql = "UPDATE products SET ? WHERE category_id=?";
  const { body, params } = req;
  const { categoryId } = params;

  con.query(sql, [body, categoryId], function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});

module.exports = router;
