const Cart = require("../models/Cart");

exports.getCartById = async (req, res, next) => {
  res.send("hej");
};

exports.createNewCart = async (req, res, next) => {
  res.send("hej cart");
};

exports.deleteCart = async (req, res, next) => {
  res.send("ta bort");
};
