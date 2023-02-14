const express = require("express");
const {
  getCartById,
  getTodoById,
  createNewTodo,
  updateTodoById,
  deleteTodo,
} = require("../controllers/cartControllers");
const router = express.Router(); //wrappar hela funktionen i en try catch så jag slipper görade t i mina controllers

router.get("/:cartId", getCartById);

// router.post('/', createNewTodo)

// router.put('/:projectId', updateTodoById)

// router.delete('/:projectId', deleteTodo)

module.exports = router;
