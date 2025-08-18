//Require/Imports Statements
const mongoose = require("mongoose");

//Creating User schema to store data in the mongoDb databse
const userData = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
});

//Creating user model
const USER = mongoose.model("user", userData);

//Export function
module.exports = USER;
