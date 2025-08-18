//Require/Imports Statements
const jwt = require("jsonwebtoken");

//Creating Authenticated callback function/method
const handleAuthenticated = (req, res) => {
  //get token from the request
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(404).json({ msg: "Not Authenticated...." });
  }

  try {
    //Verify token getting from the request
    const user = jwt.verify(token, process.env.SECRET_KEY);
    return res.status(200).json({ msg: "User authenticated...", user });
  } catch (err) {
    return res.status(404).json({ msg: "Invalid token..." });
  }
};

//Export function
module.exports = { handleAuthenticated };
