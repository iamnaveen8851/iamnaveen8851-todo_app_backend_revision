const userModel = require("../models/userModel/userModel");
const bcrypt = require("bcrypt");

const userSignUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    // check if the user already exists
    if (existingUser) {
      return res.status(403).json({ message: "user already exists." });
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
      const newUser = userModel({
        username,
        email,
        password: hash,
      });
      await newUser.save();
      res.status(201).json({ message: "User Registered Successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = userSignUp;
