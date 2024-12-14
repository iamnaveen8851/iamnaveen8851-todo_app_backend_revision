const todoModel = require("../models/todoModel/todoModel");

const getTodo = async (req, res) => {
  const { userId, username } = req.body;
  // console.log(userId, username);
  try {
    const todoData = await todoModel.find({ userId });

    // what if there's no todo found
    if (todoData.length === 0) {
      return res
        .status(404)
        .json({ message: `No todos found of ${username}`, data: todoData,
        suggestion: "Create Todo first to read it." }); // return 404 Not Found if no todo found. 400 Bad Request if there's an error. 200 OK if successful. 500 Internal Server Error if there's a server error. 503 Service Unavailable if the server is temporarily unavailable. 410 Gone if the resource has been removed. 304 Not Modified if the client has a valid cached response. 206 Partial Content if the client has requested a partial response. 207 Multi-Status if the client has requested multiple resources. 100 Continue if the client has sent a request with Expect: 100-continue. 101 Switching Protocols if the client has sent a request with Upgrade: header. 102 Processing if the client has sent a request with Expect: 1
    }
    res.status(200).json({
      message: `All Todo data have been fetched successfully of the user ${username}`,
      data: todoData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getTodo;
