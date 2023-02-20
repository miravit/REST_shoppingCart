const express = require("express");
const {
  getCartById,
  createNewCart,
  deleteCart,
} = require("../controllers/cartControllers");

const router = express.Router();
router.post("/", createNewCart);
router.get("/:cartId", getCartById);
router.delete("/:cartId", deleteCart);

module.exports = router;
