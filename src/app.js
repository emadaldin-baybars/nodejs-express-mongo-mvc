const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/user.routes"));

// Error Handling Middleware
app.use(require("./middlewares/error.middleware"));

module.exports = app;