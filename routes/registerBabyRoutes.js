const express = require("express");
const router = express.Router();

//import model
const Sitter = require("../models/Sitter");

const Register = require("../models/registerBaby");


router.get("/register",async(req, res)=>{
  try {
    const sitters = await Sitter.find({ status: "ClockedIn" });
    const baby = new Register(req.body)
    res.render("registerbaby", {
    baby:baby,
    sitters:sitters
});

} catch (error) {
  console.log('error registering baby', error);
  res.status(400).send("unable to register baby");
}

}); 

//post route 
router.post("/register", async(req, res)=>{
  try{
    const baby = new Register(req.body)
    console.log(baby);
    await baby.save();
    res.redirect("/babiesClockedin");
    
  } catch (error) {
     res.status(400).send("error, baby not registered")
     console.log("Error registering baby..",error);
  }
 
});


//deleting
router.post("/delete", async(req, res)=>{
  try{
    await Register.deleteOne({_id:req.body.id});
    res.redirect("back");
    
  } catch (error) {
     res.status(400).send("Unable to delete baby from db")
     console.log("Error deleting baby..",error);
  }
 
});

//updating a baby in the database
router.get("/babiesUpdate/:id", async(req, res)=>{
  try{
     const babyUpdate = await Register.findOne({_id: req.params.id});
     res.render("Update-baby",{baby:babyUpdate})

  } catch (error) {
      console.log("error finding baby!",error);
      res.status(400).send("unable to find baby from db!");
  }
})

router.post("/babiesUpdate", async(req, res)=> {
  try {
     await Register.findOneAndUpdate({_id: req.query.id}, req.body);
     res.redirect("/babiesClockedin");

  } catch (error) {
     res.status(404).send("unable to update baby in the db!");  
  }
})

//fetch clocked in babies
router.get("/babiesClockedin", async (req, res)=>{
  try {
    let babies = await Register.find({status: "ClockedIn"})
    res.render("clockedinbabies", {babies:babies})
    console.log("babies clocked In", babies);

  } catch (error) {
    res.status(400).send("unable to find baby!")
    console.log("unable to find babies in db", error);
    
  }
})

//clockin baby route for form
router.get("/babyClockIn/:id", async(req,res)=> {
  try {
    const sitters = await Sitter.find()
    const babyClockin = await Register.findOne({_id: req.params.id});
    res.render("clockinForm", {
      baby:babyClockin,
      sitters:sitters
    });

  } catch (error) {
    console.log("error finding baby!", error);
    res.status(400).send("unable to find baby from db");
  }
})

router.post("/babyClockIn", async(req,res)=> {
  try {
    await Register.findOneAndUpdate({_id: req.query.id}, req.body);
    res.redirect("/babiesClockedin");

  } catch (error) {
    res.status(404).send("unable to update")
  }
})

//clock Out baby route
router.get("/babiesClockedOut", async (req, res)=>{
  try {
    let babies = await Register.find({status: "ClockedOut"})
    res.render("clockedOutbabies", {babies:babies})
    console.log("babies clocked Out", babies);

  } catch (error) {
    res.status(400).send("unable to find baby!")
    console.log("unable to find babies in db", error);
    
  }
})

//clock Out baby route for form
router.get("/babyClockOut/:id", async(req,res)=> {
  try {
    
    const babyClockin = await Register.findOne({_id: req.params.id});
    res.render("clockOutForm", {
      baby:babyClockin,
      
    });

  } catch (error) {
    console.log("error finding baby!", error);
    res.status(400).send("unable to find baby from db");
  }
})

router.post("/babyClockOut", async(req,res)=> {
  try {
    await Register.findOneAndUpdate({_id: req.query.id}, req.body);
    res.redirect("/babiesClockedOut");

  } catch (error) {
    res.status(404).send("unable to update")
  }
})

module.exports = router;