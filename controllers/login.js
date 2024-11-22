const userModel = require("../models/userModel/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    //  get the existing user from email
    // check if the user already exists then check the password
    // assign the token
    // send the token back to the client
    // otherwise send the response back to client to check the login credentials

    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid Password." });
    }

    const token = jwt.sign(
      { userId: existingUser._id, username: existingUser.username },
      //   added expiry time of the token
      process.env.SECURITY_KEY,
      { expiresIn: "2d" }
    );

    // res
    //   .status(200)
    //   .json({ message: "User Logged in successfully", token: token });

    // Set token in HttpOnly cookie
    res
      .cookie("jwt", token, {
        httpOnly: true, // Prevent access from JavaScript
        secure: process.env.NODE_ENV === "production", // Send only over HTTPS in production
        sameSite: "Strict", // CSRF protection
        maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days in milliseconds
      })
      .status(200)
      .json({ message: "User Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = userLogin;
