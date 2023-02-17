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
    const id = req.body.id;
    const productId = req.params.productId;
    //borde hämta in namnet och priset här för annars kna jag ju inte pusha det in i listan??
    const cartList = await Cart.findById(id);
    const productItem = await Product.findById(productId);
    console.log(productItem);
    //pushar mitt object till min Cart.

    cartList.cart.push({
      product: productItem,
    });

    cartList.totalAmount += productItem.price;

    await cartList.save();

    return res.status(201).json(productItem);
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
