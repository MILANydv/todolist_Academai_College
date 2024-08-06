// routes/todos.js
const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/auth");
const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// Create a new todo
router.post("/", authenticateToken, createTodo);

// Get all todos
router.get("/", authenticateToken, getTodos);

// Get a specific todo
router.get("/:id", authenticateToken, getTodo);

// Update a todo
router.put("/:id", authenticateToken, updateTodo);

// Delete a todo
router.delete("/:id", authenticateToken, deleteTodo);

module.exports = router;
