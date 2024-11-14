const todoModel = require("../models/todoModel/todoModel");

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await todoModel.findByIdAndDelete(id);

    res
      .status(200)
      .json({ message: "todo deleted successfully", deletedTodo: deleteTodo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteTodo;
