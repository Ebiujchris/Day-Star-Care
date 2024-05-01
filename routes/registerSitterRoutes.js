const express = require("express");
const router = express.Router();

//import model
const Sitter = require("../models/Sitter");

//create route
router.get("/AddSItter", (req,res)=>{
  res.render("registerSitter");
})

router.post("/AddSitter",async(req, res)=>{
try {
  const sitter = new Sitter(req.body)
  console.log(sitter);
  await sitter.save();
  res.redirect("/dashboard");

} catch (error) {
  res.status(400).send("error, sitter no registered")
  console.log("Error registering sitter",error);
}
});

module.exports = router;