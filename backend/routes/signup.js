//Require/Imports statements
const express = require("express");
const { handleSignup } = require("../controllers/signup");

//Creating instance of express router
const router = express.Router();

//Create Authenticated route
router.post("/", handleSignup);

//Exports router
module.exports = router;
