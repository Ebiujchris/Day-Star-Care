const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login",(req, res)=>{
  res.render("login")
});

router.post("/login", passport.authenticate("local",{failureRedirect: "/login"}),
 (req, res)=> {
  res.redirect("/dashboard") 
});

router.get("/logout", (req, res)=>{
    if(req.session){
      req.session.destroy((error)=>{
        if(error){
          return res.status(500).send("error logging out..")
        }
        res.redirect("/login");
      })
    }
})

module.exports = router;

