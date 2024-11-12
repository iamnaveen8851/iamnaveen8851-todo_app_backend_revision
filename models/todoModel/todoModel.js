const mongoose = require("mongoose");
const todoSchema = require("../todoSchema/todoSchema");

const todoModel = mongoose.model("Todo_App", todoSchema);

module.exports = todoModel;
