const mongoose = require("mongoose");
const userSchema = require("../userSchema/userSchema");

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
