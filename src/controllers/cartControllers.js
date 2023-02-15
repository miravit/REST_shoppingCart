const Cart = require("../models/Cart");

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

exports.getCartById = async (req, res, next) => {
  const cartId = req.params.cartId;

  const cart = await Cart.findById(cartId);

  if (!cart) return res.sendStatus(404);

  res.json(cart);
};

exports.deleteCart = async (req, res, next) => {
  const cartId = req.params.cartId;

  const cartToDelete = await Cart.findById(cartId);

  if (!cartToDelete) return res.sendStatus(404);

  const response = await cartToDelete.delete();

  return res.send("deleting");
};
