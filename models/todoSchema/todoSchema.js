const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, require: true },
  //   description: { type: String, require: true }, once we're done with the todo then use this description to add in our todo
  status: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String },
  username: { type: String },
});

module.exports = todoSchema;
