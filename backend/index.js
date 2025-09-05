//Requaire/imports Statements
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const { connectionOfMongoDB } = require("./connection");
const useSignUp = require("./routes/signup");
const useLogin = require("./routes/login");
const useAuthenticated = require("./routes/authenticated");
const useLogout = require("./routes/logout");

//Configuration/Inject .env file
dotenv.config();

//Creating instance of the Express
const app = express();

//Middlewares
app.use(
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
  cookieParser()
);

//Connection of MongoDB
connectionOfMongoDB(process.env.CONNECT_MONGO_DB);

//Creating Routes
app.use("/register", useSignUp);
app.use("/api/auth-with-password", useLogin);
app.use("/authenticated", useAuthenticated);
app.use("/logout", useLogout);

//Creating Server of Node JS
app.listen(process.env.PORT, () =>
  console.log(`Server Started at localhost: ${process.env.PORT}`)
);
