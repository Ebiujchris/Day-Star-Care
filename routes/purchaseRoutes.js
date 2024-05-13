const express = require("express");
const router = express.Router();

//import model file
const Purchase = require("../models/purchase");

router.get("/registerItems" ,(req, res)=>{
 
   res.render("purchase");
});

//posting items to db
router.post("/registerItems", async(req, res)=>{
  try {
    const item = new Purchase(req.body)
    console.log(item);
    await item.save();
    res.redirect("/itemsPurchased")
  } catch (error) {
    res.status(400).send("unable to post item", error);
  }
});
 
//fetching items from db
router.get("/itemsPurchased", async(req, res)=>{
  try {
    let items = await Purchase.find()
    res.render("purchaseTable",{items:items})
  } catch (error) {
    res.status(400).send("unable to fetch items form db")
  }
})




module.exports = router;