const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  const { jwtToken } = req.cookies;
  // console.log("Cookies ===> ", jwtToken);

  try {
    // get the token from the request cookies

    // check if the token is truthy or has the value or not
    if (!jwtToken) {
      return res
        .status(401)
        .json({ message: "Authentication token is required" });
    }
    // verify a token symmetric - synchronous
    var decoded = jwt.verify(jwtToken, process.env.SECURITY_KEY);

    const { userId, username } = decoded;
    req.body.userId = userId;
    req.body.username = username;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = auth;
