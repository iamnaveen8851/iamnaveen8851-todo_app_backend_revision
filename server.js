const express = require("express");
require("dotenv").config();
const connectDb = require("./config/connectDb");
const userRouter = require("./routes/userRouter");
const todoRouter = require("./routes/todoRouter");

// Create a server
const app = express();
// internal middleware
app.use(express.json());

// use the routes
app.use("/user", userRouter);
app.use("/todo", todoRouter);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`Welcome to Todo App Server!`);
});

app.listen(PORT, async () => {
  try {
    await connectDb;
    console.log(`Server listening on PORT NO. ${PORT} and DB is connected`);
  } catch (error) {
    console.log(error.message);
  }
});
