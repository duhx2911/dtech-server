const express = require("express");
const router = express.Router();
const { db } = require("../db");
const con = db();
router.get("/imageProduct/:id", function (req, res) {
  const { id } = req.params;
  let sql = "SELECT * FROM imageproduct where productdetail_id = ?";
  con.query(sql, id, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.get("/imageProduct", function (req, res) {
  let sql = "SELECT * FROM imageproduct";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.post("/imageProduct", function (req, res) {
  const { body } = req;
  let sql = "insert into imageproduct set ?";
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
router.delete("/imageProduct/:imageProductId", function (req, res) {
  const sql = "DELETE FROM imageproduct WHERE id=?";
  const { imageProductId } = req.params;
  con.query(sql, imageProductId, function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: imageProductId });
    }
  });
});
module.exports = router;
