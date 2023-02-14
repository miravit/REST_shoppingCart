const express = require("express");
const {
  getAllProducts,
  getProductById,
  createNewProduct,
  addProductToCart,
  deleteProductFromCart,
} = require("../controllers/productControllers");

const router = express.Router(); //wrappar hela funktionen i en try catch så jag slipper görade t i mina controllers

router.get("/:productId", getProductById);

router.get("/", getAllProducts);

router.post("/", createNewProduct);

router.post("/", addProductToCart); //VET INTE VILKEN HHTTP METHOD. KAN VARA PUT

router.delete("/:projectId", deleteProductFromCart);

module.exports = router;
