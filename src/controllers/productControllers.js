const Product = require("../models/Product");

exports.getProductById = async (req, res, next) => {
  res.send("hämta");
};

exports.getAllProducts = async (req, res, next) => {
  res.send("hämta");
};

exports.createNewProduct = async (req, res, next) => {
  const product = req.body.product || "";
  const price = req.body.price;
  if (!product)
    return res.status(400).json({
      message: "You must provide a productname",
    }); //Skapar ny product

  const newProduct = await Product.create({
    product: product,
    price: price,
  }); // return res.json(req.body)
  return res
    .setHeader(
      "Location",
      `http://localhost:4000/api/v1/projects/${newProduct._id}`
    )
    .status(201)
    .json(newProduct);
};

exports.addProductToCart = async (req, res, next) => {
  res.send("hola");
};

exports.deleteProductFromCart = async (req, res, next) => {
  res.send("hola ta bort");
};
