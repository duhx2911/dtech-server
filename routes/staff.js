const express = require("express");
const router = express.Router();
const authMiddleware = require("./auth/auth.middlewares");
router.get("/staff", function (req, res) {
  let sql = "SELECT * FROM staff";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});

router.get("/staff/:staffId", function (req, res) {
  let sql = "SELECT * FROM staff where id =?";
  const { staffId } = req.params;
  con.query(sql, staffId, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.put("/staff/:staffId", authMiddleware.isAuth, function (req, res) {
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
module.exports = router;
