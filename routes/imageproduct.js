const express = require("express");
const router = express.Router();
router.get("/imageProduct/:id", function (req, res) {
  const { id } = req.params;
  let sql = "SELECT * FROM imageproduct where productId = ?";
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

module.exports = router;
