const express = require("express");
require("dotenv").config();
const connectDb = require("./config/connectDb");
const userRouter = require("./routes/userRouter");
const todoRouter = require("./routes/todoRouter");
const cookieParser = require("cookie-parser");
const cors = require("cors");
var fp = require("find-free-port");
// Create a server
const app = express();

// ----- for DEV mode ------
// setup CORS configuration
// const corsOptions = {
//   origin: `http://localhost:5173`, // frontend url
//   credentials: true, // Allow cookies to be sent
// };

// // setup CORS configuration ----> for production
const corsOptions = {
  origin: `https://todo-app-frontend-redux.vercel.app`, // frontend url
  credentials: true, // Allow cookies to be sent
};

// internal middleware
app.use(cors(corsOptions)); // Enable CORS
app.use(cookieParser());
app.use(express.json());

// use the routes
app.use("/user", userRouter);
app.use("/todo", todoRouter);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`Welcome to Todo App Server!`);
});

// app.listen(PORT, async () => {
//   try {
//     await connectDb;
//     console.log(`Server listening on PORT NO. ${PORT} and DB is connected`);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

fp(3000, function (err, freePort) {
  if (err) {
    console.error(err);
    return;
  }

  app.listen(freePort, async () => {
    try {
      await connectDb;
      console.log(
        `Server listening on PORT NO. ${freePort} and DB is connected`
      );
    } catch (error) {
      console.log(error.message);
    }
  });
});
