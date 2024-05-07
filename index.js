//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const passport = require("passport");
const expressSession = require("express-session")({
  secret: "love",
  resave: false,
  saveUninitialized: false,
});

require("dotenv").config();

// signuproute with user details
const SignUp = require("./models/SignupModel");

const port = 4000;

//for importing routes
const registerBabyRoutes = require("./routes/registerBabyRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const SignUpRoutes = require("./routes/SignUpRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
const addSitterRoutes = require("./routes/registerSitterRoutes");

//Instantiations
const app = express();

 //Configurations
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

app.set("view engine", "pug"); //setting engine to pug
app.set("views", path.join(__dirname, "views")); //specify the directory where the views are found


//Middleware
app.use(express.static(path.join(__dirname, "public"))); //set for directory static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));


//expression session config
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//passport config
passport.use(SignUp.createStrategy());
passport.serializeUser(SignUp.serializeUser());
passport.deserializeUser(SignUp.deserializeUser());

//use imported routes
app.use("/", registerBabyRoutes);
app.use("/", dashboardRoutes);
app.use("/", SignUpRoutes);
app.use("/",authenticationRoutes);
app.use("/",addSitterRoutes);


//For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL");
});

//Bootstrpping the server
//Always the last line in your code
app.listen(port, () => console.log(`listening on port ${port}`));
