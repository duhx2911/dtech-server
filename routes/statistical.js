const express = require("express");
const router = express.Router();
const { db } = require("../db");
const con = db();

router.get("/statistical", function (req, res) {
  let sql = "call dtech.soldCategory();";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response[0] });
    }
  });
});
router.get("/revenue", function (req, res) {
  let sql = "call dtech.revenueCategory();";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response[0] });
    }
  });
});
router.get("/revenue-detail", function (req, res) {
  let sql = "call dtech.getDetailRevenue();";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response[0] });
    }
  });
});
router.get("/revenue-today", function (req, res) {
  let sql = "call dtech.revenueToday();";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({
        status: "success",
        data: response[0].length ? response[0][0].revenueToday : 0,
      });
    }
  });
});
router.get("/sold-today", function (req, res) {
  let sql =
    "SELECT count(id) soldToday FROM dtech.order WHERE date(create_at) = current_date() group by date(create_at);";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({
        status: "success",
        data: response.length ? response[0].soldToday : 0,
      });
    }
  });
});

router.post("/profit", function (req, res) {
  const { body } = req;
  let sql = "call dtech.getprofit(?,?);";
  con.query(sql, [body.fromdate, body.todate], (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response[0] });
    }
  });
});

module.exports = router;
