const express = require("express");
var cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const { db } = require("./db");
const fs = require("fs");
const router = require("./auth/auth.routes");
const port = process.env.PORT || 8000;
const app = express();

const authMiddleware = require("./auth/auth.middlewares");
app.use(cors());

const con = db();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*======================================
  Upload Image
========================================*/

// Set Storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

app.post("/uploadfile", upload.single("myFile"), function (req, res, next) {
  const file = req.file;

  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  const response = {
    message: "Image mis à jour",
  };
  res.send(file);
});

app.get("/getPhoto/:imageId", function (req, res, next) {
  const { imageId } = req.params;
  res.sendFile(__dirname + `/images/${imageId}`);
});

async function deleteAllFilesInDir(dirPath) {
  try {
    const files = fs.readdir(dirPath);

    const deleteFilePromises = files.map((file) =>
      fs.unlink(path.join(dirPath, file))
    );

    await Promise.all(deleteFilePromises);
  } catch (err) {
    console.log(err);
  }
}

app.delete("/remove-all-images", async function (req, res, next) {
  const directory = "/images";
  await deleteAllFilesInDir(__dirname + directory);
});

/*======================================
  Auth
========================================*/

app.use("/auth", router);

app.route("/staff").get(function (req, res) {
  let sql = "SELECT * FROM staff";
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});
app
  .route("/staff/:staffId")
  .get(function (req, res) {
    let sql = "SELECT * FROM staff where id =?";
    const { staffId } = req.params;
    con.query(sql, staffId, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .put(authMiddleware.isAuth, function (req, res) {
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

app
  .route("/products")
  .get(function (req, res) {
    let sql = "SELECT * FROM products";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .post(function (req, res) {
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
app
  .route("/product/:productId")
  .put(function (req, res) {
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
  })
  .delete(function (req, res) {
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

// Categories
app
  .route("/categories")
  .get(function (req, res) {
    let sql = "SELECT * FROM categories";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .post(function (req, res) {
    let sql = "insert into categories set ?";
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

app
  .route("/category/:id")
  .put(function (req, res) {
    let sql = "UPDATE categories SET ? WHERE id=?";
    const { body, params } = req;
    const { id } = params;

    con.query(sql, [body, id], function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: body });
      }
    });
  })
  .delete(function (req, res) {
    let sql = "DELETE FROM categories WHERE id=?";
    const { id } = req.params;
    con.query(sql, id, function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: id });
      }
    });
  });

app.route("/authorization").post(function (req, res) {
  let sql = "INSERT INTO authorization SET ?";
  const { body } = req;

  con.query(sql, body, function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: body });
    }
  });
});
app.route("/authorization/:idAuth").delete(function (req, res) {
  let sql = "DELETE FROM authorization WHERE id=?";
  const { idAuth } = req.params;
  con.query(sql, idAuth, function (err) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", message: idAuth });
    }
  });
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
