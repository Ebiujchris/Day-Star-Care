const express = require("express");
const router = express.Router();
const passport = require("passport");

// //import model
const RegisterStaff = require("../models/RegisterStaff");


router.get("/signup", (req, res) => {
  res.render("adminReg");
});

router.post("/signup", async(req, res) => {
  try {
      const signup = new RegisterStaff(req.body);
      console.log(signup)
      await RegisterStaff.register(signup,req.body.password,(err)=>{
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
