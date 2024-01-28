const express = require("express");
const router = express.Router();
const { db } = require("../db");
const con = db();

router.get("/products", function (req, res) {
  let sql =
    "SELECT prd.*,prom.value discount_value,(prd.price - prd.price*prom.value/100) sales FROM dtech.products prd LEFT JOIN promotion prom on prd.discount = prom.promotion_code";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.post("/products", function (req, res) {
  let sql = "insert into products set ?";
  const { body } = req;
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

router.get("/products/:productId", function (req, res) {
  const { productId } = req.params;
  let sql =
    "SELECT prd.*,prom.value discount_value,(prd.price - prd.price*prom.value/100) sales FROM dtech.products prd LEFT JOIN promotion prom on prd.discount = prom.promotion_code where prd.id = ?;";
  con.query(sql, productId, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.put("/products/:productId", function (req, res) {
  let sql = "UPDATE products SET ? WHERE id=?";
  const { body, params } = req;
  const { productId } = params;

  con.query(sql, [body, productId], function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});
router.delete("/products/:productId", function (req, res) {
  const sql = "DELETE FROM products WHERE id=?";
  const { productId } = req.params;
  con.query(sql, productId, function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: productId });
    }
  });
});
router.get("/product/:slug", function (req, res) {
  let sql = "call dtech.getProductBySlug(?);";
  const { slug } = req.params;
  con.query(sql, slug, (err, data) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: data[0] });
    }
  });
});
router.get("/newproducts", function (req, res) {
  let sql =
    "SELECT prd.*,prom.value discount_value, (prd.price - prd.price*prom.value/100) sales FROM products prd LEFT JOIN promotion prom on prd.discount = prom.promotion_code order by create_at DESC limit 4;";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.get("/iphone", function (req, res) {
  let sql =
    "SELECT prd.*,prom.value discount_value,(prd.price - prd.price*prom.value/100) sales FROM products prd LEFT JOIN promotion prom on prd.discount = prom.promotion_code where category_id = 1  order by rand(CURDATE()) limit 4;";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.get("/productCate/:cateSlug", function (req, res) {
  let sql = "call dtech.getProductCate(?);";
  let { cateSlug } = req.params;
  con.query(sql, cateSlug, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response[0] });
    }
  });
});
router.get("/ipad", function (req, res) {
  let sql =
    "SELECT prd.*,prom.value discount_value,(prd.price - prd.price*prom.value/100) sales FROM products prd LEFT JOIN promotion prom on prd.discount = prom.promotion_code where category_id = 2  order by rand(CURDATE()) limit 4;";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.get("/promotion", function (req, res) {
  const sql =
    "SELECT prd.id,prd.product_name,prd.price,prd.artwork,prom.value val FROM dtech.products prd LEFT JOIN promotion prom on prd.discount = prom.promotion_code where prom.value > 0;";
  con.query(sql, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});

// Product Detail
router.get("/productdetail", function (req, res) {
  const sql = "SELECT * FROM dtech.productdetail;";
  con.query(sql, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.get("/productdetail/:productdetailId", function (req, res) {
  const { productdetailId } = req.params;
  const sql = "SELECT * FROM dtech.productdetail WHERE product_id = ?;";
  con.query(sql, productdetailId, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
router.post("/productdetail", function (req, res) {
  let sql = "insert into productdetail set ?";
  const { body } = req;
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
router.put("/productdetail/:productdetailId", function (req, res) {
  let sql = "UPDATE productdetail SET ? WHERE id=?";
  const { body, params } = req;
  const { productdetailId } = params;

  con.query(sql, [body, productdetailId], function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});
router.delete("/productdetail/:productdetailId", function (req, res) {
  const sql = "DELETE FROM productdetail WHERE id=?";
  const { productdetailId } = req.params;
  con.query(sql, productdetailId, function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: productdetailId });
    }
  });
});

router.get("/productimg", function (req, res) {
  const sql =
    "SELECT prdt.*, prd.product_name FROM dtech.productdetail prdt left join products prd on prd.id = prdt.product_id;";
  con.query(sql, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
module.exports = router;
