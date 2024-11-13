const todoModel = require("../models/todoModel/todoModel");

const getTodo = async (_, res) => {
  try {
    const todoData = await todoModel.find();
    res.status(200).json({
      message: "Todo Data has been fetched successfully",
      data: todoData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getTodo;
