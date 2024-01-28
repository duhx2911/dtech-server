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
router.get("/order/:order_id", function (req, res) {
  const { order_id } = req.params;
  let sql = "call dtech.getOrderDetail(?);";
  con.query(sql, order_id, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response[0] });
    }
  });
});
router.put("/order/:order_id", function (req, res) {
  const { order_id } = req.params;
  const { body } = req;
  let sql = "UPDATE dtech.order SET ? WHERE id=?";
  con.query(sql, [body, order_id], function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});
router.put("/orderbycode/:order_code", function (req, res) {
  const { order_code } = req.params;
  const { body } = req;
  let sql = "UPDATE dtech.order SET ? WHERE order_code=?";
  con.query(sql, [body, order_code], function (err) {
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
router.get("/user-order", function (req, res) {
  const { email } = req.query;
  let sql = `SELECT * FROM dtech.order WHERE email='${email}'`;
  con.query(sql, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
module.exports = router;
