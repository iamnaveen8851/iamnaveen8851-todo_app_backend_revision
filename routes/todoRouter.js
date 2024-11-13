const express = require("express");
const addTodo = require("../controllers/addTodo");
const getTodo = require("../controllers/getTodo");

const todoRouter = express.Router();

todoRouter.get("/", getTodo);

todoRouter.post("/addTodo", addTodo);

module.exports = todoRouter;
