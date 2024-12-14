const userModel = require("../models/userModel/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSignUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    // check if the user already exists
    if (existingUser) {
      return res.status(403).json({
        message: "user already exists, Kindly Login with correct credentials.",
      });
    }

    // hash the password
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        return res.status(403).json({ message: err.message });
      }

      // create a new user with hashed password
      //   first method
      //   const newUser = userModel.create({
      //     username,
      //     email,
      //     password: hash,
      //   });

      // second method
      const newUser = new userModel({
        username,
        email,
        password: hash,
      });
      await newUser.save();

      // assign token for the new user signup and set token in form of cookies so user will directly logged in redirect to perfrom CRUD operations.
      var token = jwt.sign(
        { userId: newUser._id, username: newUser.username },
        process.env.SECURITY_KEY,
        { expiresIn: "2d" }
      );

      res
        .cookie("jwtToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
          maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days in milliseconds
        })
        .status(201)
        .json({
          message: "User Registered Successfully",
          user: newUser.username,
        });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = userSignUp;
