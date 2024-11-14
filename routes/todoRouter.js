const express = require("express");
const addTodo = require("../controllers/addTodo");
const getTodo = require("../controllers/getTodo");
const updateTodo = require("../controllers/updateTodo");
const deleteTodo = require("../controllers/deleteTodo");

const todoRouter = express.Router();

todoRouter.get("/", getTodo);

todoRouter.post("/addTodo", addTodo);

todoRouter.patch("/updateTodo/:id", updateTodo);

todoRouter.delete("/deleteTodo/:id", deleteTodo);

module.exports = todoRouter;
