const express = require("express");
const {
  getCartById,
  createNewCart,
  deleteCart,
} = require("../controllers/cartControllers");

const router = express.Router(); //wrappar hela funktionen i en try catch så jag slipper görade t i mina controllers

router.post("/", createNewCart);
router.get("/:cartId", getCartById);
router.delete("/:cartId", deleteCart);

// router.put('/:projectId', updateTodoById)

module.exports = router;
