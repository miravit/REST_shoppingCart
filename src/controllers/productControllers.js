const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { NotFoundError } = require("../utils/errors");

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

  if (!products) {
    throw new NotFoundError("This product does not exist");
  }

  if (!cart) {
    throw new NotFoundError("This cart does not exist");
  }

  for (let i = 0; i < cart.products.length; i++) {
    if (cart.products[i]._id == productId) {
      // console.log(cart.products[i].quantity);
      cart.products[i].quantity++;
      await cart.save();
      return res.status(201).json(cart);
    } else {
      cart.products.push(products); //ddenna else gör att allt pushas in 3 gånger
      await cart.save();
    }
  }
};

exports.deleteProductFromCart = async (req, res, next) => {
  res.send("hola ta bort");
};
