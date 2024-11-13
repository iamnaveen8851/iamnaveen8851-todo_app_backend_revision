const todoModel = require("../models/todoModel/todoModel");

const addTodo = async (req, res) => {
  try {
    const newTodo = await todoModel(req.body);
    await newTodo.save();
    res
      .status(201)
      .json({ message: "A new Todo has been added.", data: newTodo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addTodo;
