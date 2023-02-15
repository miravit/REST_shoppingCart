const Product = require("../models/Product");

exports.getProductById = async (req, res, next) => {
  res.send("hämta");
};

exports.getAllProducts = async (req, res, next) => {
  res.send("hämta");
};

exports.addProductToCart = async (req, res, next) => {
  res.send("hola");
};

exports.deleteProductFromCart = async (req, res, next) => {
  res.send("hola ta bort");
};
