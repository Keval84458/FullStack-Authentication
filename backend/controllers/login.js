//Require/Imports Statements
const USER = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Creating Login callback function/method
const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check email and password are not empty
    if (!email || !password) {
      return res.status(404).json({ msg: "All fields are required...." });
    }

    //Check user is exists or not
    const users = await USER.findOne({ email });
    if (!users) {
      return res.status(404).json({ msg: "Invalid credentials..." });
    }

    //Compare password is true or not
    const isMatch = await bcrypt.compare(password, users.password);
    if (!isMatch) {
      return res.status(404).json({ msg: "Invalid credentials..." });
    }

    //Creating JWT token
    const jwtToken = await jwt.sign(
      { id: users.id, email: users.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      msg: "Login Successfully.....",
      user: {
        id: users._id,
        name: users.name,
        email: users.email,
      },
      token: jwtToken,
    });
  } catch (err) {
    console.log("err", err);
  }
};

//Export function
module.exports = { handleLogin };
