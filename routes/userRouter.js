const express = require("express");
const getUserData = require("../controllers/getUsers");
const userSignUp = require("../controllers/signUp");
const userLogin = require('../controllers/login')

const userRouter = express.Router();

userRouter.get("/", getUserData);

userRouter.post("/signup", userSignUp);

userRouter.post("/login", userLogin);

module.exports = userRouter;
