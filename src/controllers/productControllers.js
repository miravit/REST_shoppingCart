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
  try {
    const productId = req.params.productId;
    const cartId = req.body.cartId;

    const cart = await Cart.findById(cartId);
    const products = await Product.findById(productId);
    console.log(cart);
    //pushar mitt object till min Cart.

    cart.products.push(products);

    console.log("--------");
    console.log(products);
    console.log("--------");

    cart.totalAmount += products.price;

    await cart.save();

    return res.status(201).json(products);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteProductFromCart = async (req, res, next) => {
  res.send("hola ta bort");
};
