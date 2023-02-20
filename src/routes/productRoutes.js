const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProductToCart,
  deleteProductFromCart,
} = require("../controllers/productControllers");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:productId", getProductById);
router.post("/:productId", addProductToCart);
router.put("/:productId", deleteProductFromCart);

module.exports = router;
