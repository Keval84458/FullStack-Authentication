//Require/Imports Statements
const USER = require("../models/user");
const bcrypt = require("bcrypt");

//Creating Sign up callback function/method
const handleSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check name, email, password are required
    if (!name || !email || !password) {
      return res.json({ msg: "All fields are required..." });
    }

    //Check email is exists or not
    const user = await USER.findOne({ email });
    if (user) {
      return res.status(409).json({ msg: "Email already exists...." });
    }

    //Convert simple password to bcrypt format
    const hashPassword = await bcrypt.hash(password, 10);

    //Insert/store data in database
    const userData = await USER.create({
      name,
      email,
      password: hashPassword,
    });

    //Check user register successfully or not
    if (userData) {
      res.status(201).json({ msg: "User register successfully...." });
    } else {
      res.status(404).json({ msg: "User register failed...." });
    }
  } catch (err) {
    console.log("err", err);
  }
};

//Exports function
module.exports = { handleSignup };
