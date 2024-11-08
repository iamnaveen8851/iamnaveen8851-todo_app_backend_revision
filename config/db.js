const mongoose = require("mongoose");
require("dotenv").config();

// To Connect Database with server
//      - Add mongo db uri to the mongoose.connect
const connectDb = mongoose.connect(process.env.MONGODB_URI);

module.exports = connectDb;
