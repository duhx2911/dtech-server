const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const { db } = require("./db");
const fs = require("fs");

const router = require("./auth/auth.routes");
const payment = require("./routes/payment");
const product = require("./routes/product");
const categories = require("./routes/categories");
const order = require("./routes/order");
const imageproduct = require("./routes/imageproduct");
const user = require("./routes/user");
const statistical = require("./routes/statistical");
const review = require("./routes/review");
const discount = require("./routes/promotion");

const port = process.env.PORT || 8000;
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

const con = db();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

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
  res.send(file);
});

app.post("/uploadmultiple", upload.array("myFiles", 12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(files);
});

app
  .route("/getPhoto/:imageId")
  .get(function (req, res, next) {
    const { imageId } = req.params;
    res.sendFile(__dirname + `/images/${imageId}`);
  })
  .delete(function (req, res) {
    const { imageId } = req.params;
    // fs.unlinkSync(`images/${imageId}`);
    fs.unlink(`images/${imageId}`, (err) => {
      if (err) {
        res.send({ status: err });
      } else {
        res.send({ status: "success" });
      }
    });
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
app.use("/payment", payment);
// auth
app.use("/auth", router);
// Staff
app.use("", user);
// Product
app.use("", product);
// imageproduct
app.use("", imageproduct);
// Categories
app.use("", categories);
// statistical
app.use("", statistical);
// review
app.use("", review);
app.use("", discount);

/*=====================
    VOUCHER
=======================*/
app.route("/voucher/:code").get(function (req, res) {
  const { code } = req.params;
  const sql = "Select * From voucher Where code = ?";
  con.query(sql, code, function (err, response) {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
});

// order
app.use("", order);

app.listen(port);
console.log("Server started at http://localhost:" + port);
