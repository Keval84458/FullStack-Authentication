//Require/Imports statements
const express = require("express");
const { handleLogout } = require("../controllers/logout");

//Creating instance of express router
const router = express.Router();

//Create Logout route
router.post("/", handleLogout);

//Exports router
module.exports = router;
