//Require/Imports statements
const mongoose = require("mongoose");

//Create connection with mongo DB
const connectionOfMongoDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB is Connected...."))
    .catch(() => console.log("MongoDb is not connected..."));
};

//Exports router
module.exports = { connectionOfMongoDB };
