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

exports.addProductToCart = async (req, res, next) => {
  const productId = req.params.productId; //mitt productID jag skriver in i URI
  const id = req.body.id; //min cart ID jag skriver som JSON i bodyn
  const cart = await Cart.findById(id); //hitta cartID
  const product = await Product.findById(productId);

  cart.cart.push({
    product: productId,
  });

  await cart.save();

  console.log(product); // { _id: new ObjectId("63ecf73ddf52f146e4c2a15e"), cart: [], __v: 0 }
};

exports.deleteProductFromCart = async (req, res, next) => {
  res.send("hola ta bort");
};
