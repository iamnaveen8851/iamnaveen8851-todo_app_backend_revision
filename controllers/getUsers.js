const userModel = require("../models/userModel/userModel");

const getUserData = async (_, res) => {
  try {
    const usersData = await userModel.find();
    res
      .status(200)
      .json({ message: "users data fetched successfully", usersData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getUserData;
