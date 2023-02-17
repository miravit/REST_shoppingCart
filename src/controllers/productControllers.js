const Product = require("../models/Product");
const Cart = require("../models/Cart");

exports.getAllProducts = async (req, res, next) => {
  const products = await Product.find();

  return res.status(200).json(products);
};

exports.getProductById = async (req, res, next) => {
  const productId = req.params.productId;

  const product = await Product.findById(productId);

  if (!product) return res.sendStatus(404);

  return res.status(200).json(product);
};

exports.addProductToCart = async (req, res) => {
  const productId = req.params.productId;
  const cartId = req.body.cartId;

  const products = await Product.findById(productId);
  const cart = await Cart.findById(cartId);

  console.log(products);
  cart.products.push(products);

  cart.totalAmount += products.price;

  await cart.save();

  //   return res.send(cart);

  return res.status(200).json(cart);
};

exports.deleteProductFromCart = async (req, res, next) => {
  res.send("hola ta bort");
};
