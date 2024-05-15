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
  res.status(400).send("error, sitter not registered")
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
router.post("/delete", async(req,res)=>{
  try {
    await Sitter.deleteOne({_id:req.body.id});
    res.redirect("back");

  } catch (error) {
    res.status(400).send("Unable to delete sitter from db")
    console.log("Error deleting sitter..",error);
  }
});


//updating sitter info in db
router.get("/sittersUpdate/:id", async(req, res)=>{
  try {
    const sitterUpdate = await Sitter.findOne({_id: req.params.id});
    res.render("upDateSitter",{sitter:sitterUpdate})

  } catch (error) {
    console.log("error finding sitter!",error);
    res.status(400).send("unable to find sitter!")
  }
})

router.post("/sittersUpdate", async(req, res)=>{
  try {
    await Sitter.findOneAndUpdate({_id: req.query.id}, req.body);
    res.redirect("/sitterlist");

  } catch (error) {
    res.status(400).send("unable to update sitter!");
  }
})

//fetch clocked in sitters from db!
router.get("/sittersClockedin", async (req, res)=>{
  try {
    let sitters = await Sitter.find({status: "ClockedIn"})
    res.render("clockedinSitters", {sitters:sitters})
    console.log("Sitters clocked In", sitters);

  } catch (error) {
    res.status(400).send("unable to find sitter!")
    console.log("unable to find sitters in db", error);
    
  }
})

//clockin sitter form route
router.get("/sitterClockIn/:id", async(req,res)=> {
  try {
    const sitterClockin = await Sitter.findOne({_id: req.params.id});
    res.render("clockInSitterForm", {
      sitter:sitterClockin 
    });
  } catch (error) {
    console.log("error finding baby!", error);
    res.status(400).send("unable to find baby from db");
  }
})

router.post("/sitterClockIn", async(req,res)=> {
  try {
    await Sitter.findOneAndUpdate({_id: req.query.id}, req.body);
    res.redirect("/sittersClockedin");

  } catch (error) {
    res.status(404).send("unable to clockin sitter")
  }
})

//clock Out sitter route
router.get("/sittersClockedOut", async (req, res)=>{
  try {
    let sitters = await Sitter.find({status: "ClockedOut"})
    res.render("clockedOutSitters", {sitters:sitters})
    console.log("babies clocked Out", sitters);

  } catch (error) {
    res.status(400).send("unable to find sitter!")
    console.log("unable to find sitter in db", error);
    
  }
})

//clock Out sitter route for form
router.get("/sitterClockOut/:id", async(req,res)=> {
  try {
    const sitterClockin = await Sitter.findOne({_id: req.params.id});
    res.render("clockedOutSitterForm", {
      sitter:sitterClockin,
      
    });

  } catch (error) {
    console.log("error finding baby!", error);
    res.status(400).send("unable to find baby from db");
  }
})

router.post("/sitterClockOut", async(req,res)=> {
  try {
    await Sitter.findOneAndUpdate({_id: req.query.id}, req.body);
    res.redirect("/sittersClockedOut");

  } catch (error) {
    res.status(404).send("unable to update")
  }
})

//fetch sitter pay 
router.get("/sitterpayment", async(req, res)=>{
  try {
    let sitters = await Sitter.find() 
    res.render("sitterPayTable",{sitters:sitters})

  } catch (error) {
    res.status(400).send("unable to sitter")
    console.log("unable to find sitter in db", error);
  }
})

//pay sitter route for form
router.get("/paySitter/:id", async(req, res)=>{
  try {
  const sitterPay = await Sitter.findOne({_id: req.params.id});
  res.render("sitterPaymentForm",{sitter:sitterPay});

  } catch (error) {
    res.status(404).send("unable to find sitter")
  }
})

router.post("/paySitter", async(req,res)=>{
  try {
    await Sitter.findOneAndUpdate({_id: req.query.id},req.body);
    res.redirect("/sitterpayment");

  } catch (error) {
    res.status(404).send("unable to update")
  }
})
module.exports = router;