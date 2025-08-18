//Require/Imports statements
const express = require("express");
const { handleAuthenticated } = require("../controllers/authenticated");

//Creating instance of express router
const router = express.Router();

//Create Authenticated route
router.get("/", handleAuthenticated);

//Exports router
module.exports = router;
