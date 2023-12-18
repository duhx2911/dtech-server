const express = require("express");
const router = express.Router();

router.get("/products/:id", function (req, res) {
  const { id } = req.params;
  let sql = "SELECT * FROM products where id = ?";
  con.query(sql, id, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});

// router.get("products", function (req, res) {
//   let sql = "SELECT * FROM products";
//   con.query(sql, (err, response) => {
//     if (err) {
//       res.send({ status: "error", message: err });
//     } else {
//       res.send({ status: "success", data: response });
//     }
//   });
// });
// router.post("products", function (req, res) {
//   let sql = "insert into products set ?";
//   const { body } = req;
//   con.query(sql, body, function (err, response) {
//     if (err) {
//       res.send({ status: "error", message: err });
//     } else {
//       res.send({
//         status: "success",
//         data: { ...body, id: response.insertId },
//       });
//     }
//   });
// });

// router.get("products/:productId", function (req, res) {
//   const { productId } = req.params;
//   let sql = "SELECT * from products WHERE id=?";
//   con.query(sql, productId, function (err, response) {
//     if (err) {
//       res.send({ status: "error", message: err });
//     } else {
//       res.send({ status: "success", data: response });
//     }
//   });
// });
// router.put("products/:productId", function (req, res) {
//   let sql = "UPDATE products SET ? WHERE id=?";
//   const { body, params } = req;
//   const { productId } = params;

//   con.query(sql, [body, productId], function (err) {
//     if (err) {
//       res.send({ status: "error", message: err });
//     } else {
//       res.send({ status: "success", data: body });
//     }
//   });
// });
// router.delete("products/:productId", function (req, res) {
//   const sql = "DELETE FROM products WHERE id=?";
//   const { productId } = req.params;
//   con.query(sql, productId, function (err) {
//     if (err) {
//       res.send({ status: "error", message: err });
//     } else {
//       res.send({ status: "success", data: productId });
//     }
//   });
// });
// router.get("product/:slug", function (req, res) {
//   let sql = "SELECT * FROM products where slug = ?";
//   const { slug } = req.params;
//   con.query(sql, slug, (err, data) => {
//     if (err) {
//       res.send({ status: "error", message: err });
//     } else {
//       res.send({ status: "success", data: data });
//     }
//   });
// });
// router.get("newproducts", function (req, res) {
//   let sql = "SELECT * FROM products order by create_at DESC limit 4;";
//   con.query(sql, (err, response) => {
//     if (err) {
//       res.send({ status: "error", message: err });
//     } else {
//       res.send({ status: "success", data: response });
//     }
//   });
// });
// router.get("iphone", function (req, res) {
//   let sql =
//     "SELECT * FROM dtech.products where category_id = 1  order by rand(CURDATE()) limit 4;";
//   con.query(sql, (err, response) => {
//     if (err) {
//       res.send({ status: "error", message: err });
//     } else {
//       res.send({ status: "success", data: response });
//     }
//   });
// });
// router.get("ipad", function (req, res) {
//   let sql =
//     "SELECT * FROM dtech.products where category_id = 2  order by rand(CURDATE()) limit 4;";
//   con.query(sql, (err, response) => {
//     if (err) {
//       res.send({ status: "error", message: err });
//     } else {
//       res.send({ status: "success", data: response });
//     }
//   });
// });
module.exports = router;
