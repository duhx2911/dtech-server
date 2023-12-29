const express = require("express");
const router = express.Router();
const { db } = require("../db");
const con = db();

router.get("/order", function (req, res) {
  let sql = "Select * from dtech.order";
  con.query(sql, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.post("/order", function (req, res) {
  const { body } = req;
  let sql = "Insert into dtech.order set ?";
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
router.get("/order/:idOrder", function (req, res) {
  const { idOrder } = req.params;
  let sql =
    "SELECT orderdetail.id,orderdetail.sl,orderdetail.idProduct, products.productName,products.artwork,products.price FROM orderdetail left join products on orderdetail.idProduct = products.id Where orderdetail.idOrder = ?";
  con.query(sql, idOrder, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.put("/order/:idOrder", function (req, res) {
  const { idOrder } = req.params;
  const { body } = req;
  let sql = "UPDATE dtech.order SET ? WHERE id=?";
  con.query(sql, [body, idOrder], function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});
router.put("/orderbycode/:orderCode", function (req, res) {
  const { orderCode } = req.params;
  const { body } = req;
  let sql = "UPDATE dtech.order SET ? WHERE orderCode=?";
  con.query(sql, [body, orderCode], function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});
router.post("/orderDetail", function (req, res) {
  const { body } = req;
  let sql = "Insert into dtech.orderdetail set ?";
  con.query(sql, body, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: { ...body, id: response.insertId } });
    }
  });
});
module.exports = router;
