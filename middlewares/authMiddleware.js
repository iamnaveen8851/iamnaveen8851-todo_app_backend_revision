const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  // const token = req.cookies 
//  console.log(token)

  // if (!authHeader) {
  //   return res.status(401).json({ message: "Authorization header is missing" });
  // }
  try {
    // get the token from the request header
    // const token = authHeader.replace("Bearer", "");

    // check if the token is truthy or has the value or not
    // if (!token) {
    //   return res
    //     .status(401)
    //     .json({ message: "Authentication token is required" });
    // }
    // verify a token symmetric - synchronous
    // var decoded = jwt.verify(token, process.env.SECURITY_KEY);
    // console.log("decoded",decoded)
    // const { userId, username } = decoded;

    // req.body.userId = userId;
    // req.body.username = username;
    // next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = auth;
