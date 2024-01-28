const { db } = require("../db");
const connect = db();
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

exports.getAccounts = async ({ username }) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM user WHERE username = ?";
    connect.query(sql, username, async function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
exports.getEmail = async ({ email }) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM user WHERE email = ?";
    connect.query(sql, email, async function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.registerAccount = async (body) => {
  return new Promise((resolve, reject) => {
    body.password = bcrypt.hashSync(body.password, SALT_ROUNDS);

    let createUser = `INSERT INTO user SET ?`;
    connect.query(createUser, body, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
exports.updateAccount = async (body, accountId) => {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE user SET ? WHERE id = ?";
    connect.query(sql, [body, accountId], function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.changePasswordAccount = async ({ accountId, newpassword }) => {
  return new Promise((resolve, reject) => {
    const hashPassword = bcrypt.hashSync(newpassword, SALT_ROUNDS);
    const passwordUser = {
      password: hashPassword,
    };
    const sql = "UPDATE user SET ? WHERE id = ?";

    connect.query(sql, [passwordUser, accountId], function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.updateRefreshToken = async ({ refreshToken, accountId }) => {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE user SET ? WHERE id = ?";
    const newUser = {
      refresh_token: refreshToken,
    };
    connect.query(sql, [newUser, accountId], function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.deleteAccount = async () => {};
