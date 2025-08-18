//Require/Imports Statements
const express = require("express");
const { handleLogin } = require("../controllers/login");

//Creating instance of express router
const router = express.Router();

//Create Login route
router.post("/", handleLogin);

//Exports router
module.exports = router;
