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
  res.redirect("/sitterlist");

} catch (error) {
  res.status(400).send("error, sitter no registered")
  console.log("Error registering sitter",error);
}
});

//fetching sitters from db
router.get("/sitterlist",async(req, res)=>{
  try {
    let sitters = await Sitter.find()
    res.render("registeredSitters",{sitters:sitters})
  } catch (error) {
    res.status(400).send("unable to fetch sitters from database")
  }
});

//deleting
router.post("/delete",async(req, res)=>{
  try {
    await Sitter.deleteOne({_id:req.body.id});
    res.redirect("back");

  } catch (error) {
    res.status(400).send("Unable to delete sitter from db")
    console.log("Error deleting sitter..",error);
  }
});

//updating sitter inf in db
router.get("/sitterUpdate/:id",async(req, res)=>{
  try {
    const sitterUpdate = await Sitter.findOne({_id: req.params.id});
    res.render("upDateSitter",{sitter:sitterUpdate})

  } catch (error) {
    console.log("error finding sitter!",error);
    res.status(400).send('unable to find baby from db!');
  }
})

router.post("/sitterUpdate", async(req, res)=> {
  try {
     await Sitter.findOneAndUpdate({_id: req.query.id}, req.body);
     res.redirect("/sitterlist");

  } catch (error) {
     res.status(404).send("unable to update baby in the db!");  
  }
})
module.exports = router;