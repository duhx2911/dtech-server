const express = require("express");
const router = express.Router();
const { db } = require("../db");
const con = db();

router.get("/statistical", function (req, res) {
  let sql =
    'SELECT sum(oddt.sl) sales,cate.categoryName category from dtech.order od left join orderdetail oddt on od.id =oddt.idOrder left join products prd on oddt.idProduct = prd.id left join categories cate on prd.category_id = cate.id where od.status ="hoàn thành" and od.update_at Like "2023-12-21%" Group by cate.categoryName';
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.get("/revenue", function (req, res) {
  let sql =
    'SELECT  cate.categoryName category, sum( oddt.sl*prd.price ) total from dtech.order od left join orderdetail oddt on od.id =oddt.idOrder left join products prd on oddt.idProduct = prd.id left join categories cate on prd.category_id = cate.id where od.status ="hoàn thành" group by category';
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});

module.exports = router;
