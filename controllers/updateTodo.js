const todoModel = require("../models/todoModel/todoModel");

const updateTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const updateTodo = await todoModel.findByIdAndUpdate(id, req.body);

    res
      .status(200)
      .json({ message: "todo updated successfully", updatedTodo: updateTodo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateTodo;
