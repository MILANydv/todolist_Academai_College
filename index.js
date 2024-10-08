// server.js
const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");

// Initialize app
const app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));


// Connect to database
connectDB();

// Middleware
app.use(express.json()); // Body parser

// Define routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/todos", require("./routes/todos"));
app.use("/api/profile", require("./routes/profile"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
