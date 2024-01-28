const express = require("express");
const router = express.Router();
const { db } = require("../db");
const con = db();
const authMiddleware = require("../auth/auth.middlewares");
router.get("/user", function (req, res) {
  let sql = "SELECT * FROM user";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.get("/staff", function (req, res) {
  let sql = "SELECT * FROM user WHERE role_id<>0";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});

router.get("/user/:userId", function (req, res) {
  let sql = "SELECT * FROM user where id =?";
  const { userId } = req.params;
  con.query(sql, userId, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.put("/user/:userId", authMiddleware.isAuth, function (req, res) {
  let sql = "UPDATE user SET ? WHERE id=?";
  const { body, params } = req;
  const { userId } = params;
  con.query(sql, [body, userId], (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});
router.delete("/user/:userId", function (req, res) {
  let sql = "DELETE FROM user  WHERE id=?";

  const { userId } = req.params;
  con.query(sql, userId, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: userId });
    }
  });
});
module.exports = router;
