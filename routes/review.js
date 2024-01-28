const express = require("express");
const router = express.Router();
const { db } = require("../db");
const con = db();

router.post("/rating", function (req, res) {
  let sql = "INSERT INTO  review SET ?";
  const { body } = req;
  con.query(sql, body, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});
router.get("/rating/:idProduct", function (req, res) {
  let sql =
    "SELECT review.*, cus.username from review left join dtech.user cus on review.customer_id = cus.id Where product_id = ?";
  let { idProduct } = req.params;
  con.query(sql, idProduct, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});

module.exports = router;
