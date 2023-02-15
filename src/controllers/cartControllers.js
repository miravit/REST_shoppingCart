const Cart = require("../models/Cart");

exports.getCartById = async (req, res, next) => {
  res.send("hej");
};

exports.createNewCart = async (req, res, next) => {
  const totalAmount = req.body.totalAmount;

  const newCart = await Cart.create({
    totalAmount: totalAmount,
  });
  return res
    .setHeader("Location", `http://localhost:4000/api/v1/cart/${newCart._id}`)
    .status(201)
    .json(newCart);
};

exports.deleteCart = async (req, res, next) => {
  res.send("ta bort");
};
