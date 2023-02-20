const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { NotFoundError } = require("../utils/errors");
const { CanceledError } = require("axios");

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

  for (let i = 0; i < cart.products.length; i++) {
    if (cart.products[i]._id == productId) {
      cart.products[i].quantity++;
      cart.totalAmount += cart.products[i].price;
      await cart.save();
      return res.status(201).json(cart);
    }
  }
  cart.totalAmount += products.price;
  console.log("hej");
  cart.products.push(products);
  await cart.save();
  return res.status(200).json(cart);
};
exports.deleteProductFromCart = async (req, res, next) => {
  const productId = req.params.productId;
  const cartId = req.body.cartId;
  const cart = await Cart.findById(cartId);
  const products = await Product.findById(productId);

  for (let i = 0; i < cart.products.length; i++) {
    if (cart.products[i]._id == productId) {
      cart.products[i].quantity--;
      cart.totalAmount -= cart.products[i].price;
      console.log("hej");

      await cart.save();
      return res.status(201).json(cart);
    }
  }
  cart.totalAmount -= products.price;
  await cart.save();
  return res.status(200).json(cart);
};

///////änddra så den 0=remove
/////fixa totalsumman
