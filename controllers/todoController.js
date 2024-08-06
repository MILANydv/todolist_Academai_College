// controllers/todoController.js
const Todo = require("../models/Todo");

// Create a new todo
exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({
      title,
      description,
      user: req.user,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a specific todo
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (todo.user.toString() !== req.user.toString())
      return res.status(403).json({ message: "Not authorized" });

    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (todo.user.toString() !== req.user.toString())
      return res.status(403).json({ message: "Not authorized" });

    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;

    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.status(404).json({ message: "Todo  Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
