const express = require("express");
const addTodo = require("../controllers/addTodo");
const getTodo = require("../controllers/getTodo");
const updateTodo = require("../controllers/updateTodo");
const deleteTodo = require("../controllers/deleteTodo");
const auth = require("../middlewares/authMiddleware");

const todoRouter = express.Router();

todoRouter.get("/", auth, getTodo);

todoRouter.post("/addTodo", addTodo);

todoRouter.patch("/updateTodo/:id", updateTodo);

todoRouter.delete("/deleteTodo/:id", deleteTodo);

module.exports = todoRouter;
