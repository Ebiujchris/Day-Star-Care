const express = require("express");
const router = express.Router();
const passport = require("passport");

// //import model
const SignUp = require("../models/SignupModel");


router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async(req, res) => {
  try {
      const signup = new SignUp(req.body);
      await SignUp.register(signup,req.body.password,(err)=>{
          if(err){
              throw err
          }
          res.redirect("/signup")
      })
  } catch (error) {
      res.status(400).send("user not registered")
      console.log(error)
  }
})
module.exports = router;
