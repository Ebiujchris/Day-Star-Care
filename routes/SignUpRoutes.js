const express = require("express");
const router = express.Router();
const passport = require("passport");

// Import model
const SignUp = require("../models/SignupModel");

// Render the signup form
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Handle signup form submission
router.post("/signup", async (req, res) => {
  try {
    const signup = new SignUp(req.body);
    await SignUp.register(signup, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/login");
    });
  } catch (error) {
    res.status(400).send("User not registered");
    console.log(error);
  }
});

// Fetch admin info
router.get("/admin", async (req, res) => {
  try {
    let admin = await SignUp.find();
    res.render("adminTable", { admin: admin });
  } catch (error) {
    res.status(400).send("Unable to find admin");
  }
});

module.exports = router;
