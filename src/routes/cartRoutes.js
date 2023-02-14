const express = require("express");
const {
  getCartById,
  createNewCart,
  deleteCart,
} = require("../controllers/cartControllers");

const router = express.Router(); //wrappar hela funktionen i en try catch så jag slipper görade t i mina controllers

router.get("/:cartId", getCartById);

/////////////////////////////////
router.post("/", createNewCart);

// router.put('/:projectId', updateTodoById)

router.delete("/:cartId", deleteCart);

module.exports = router;
