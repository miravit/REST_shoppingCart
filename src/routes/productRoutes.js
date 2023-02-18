const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProductToCart,
  deleteProductFromCart,
} = require("../controllers/productControllers");
const router = express.Router(); //wrappar hela funktionen i en try catch så jag slipper görade t i mina controllers

router.get("/", getAllProducts);
router.get("/:productId", getProductById);
router.post("/:productId", addProductToCart);
router.put("/:productId", deleteProductFromCart);

module.exports = router;
