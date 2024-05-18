
const express = require("express");
const router = express.Router();
const Dolls = require("../models/storeModel");

// Route to render the form for adding an item
router.get("/addDoll", (req, res) => {
  try {
    const doll = new Dolls(req.body);
    res.render("toy", { doll });
  } catch (error) {
    console.log('Error registering doll:', error);
    res.status(400).send("Unable to register doll");
  }
});

// Handle form submission to add a new item
router.post("/addDoll", async (req, res) => {
  try {
    const doll = new Dolls(req.body);
    console.log(doll);
    await doll.save();
    res.redirect("/Dolls");
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).send("Error registering doll");
  }
});

// Route to display all available items
router.get("/Dolls", async (req, res) => {
  try {
    const dolls = await Dolls.find({ status: "Available" });
    res.render("renderDolls", { dolls });
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle selling an item
router.get("/sellDoll/:id", async (req, res) => {
  try {
    const selldoll = await Dolls.findById(req.params.id);
    res.render("sellDollForm", { doll: selldoll });
  } catch (error) {
    console.log('Error finding doll:', error);
    res.status(500).send("Unable to find doll");
  }
});

router.post("/sellDoll", async (req, res) => {
  try {
    await Dolls.findByIdAndUpdate(req.query.id, { status: 'Sold' });
    res.redirect("/soldDolls");
  } catch (error) {
    console.error('Error updating doll status:', error);
    res.status(404).send("Unable to update");
  }
});

// Fetch sold dolls
router.get("/soldDolls", async (req, res) => {
  try {
    let dolls = await Dolls.find({ status: "Sold" });
    res.render("soldDolls", { dolls });
    console.log("Dolls sold:", dolls);
  } catch (error) {
    console.error('Error finding sold dolls:', error);
    res.status(400).send("Unable to find sold dolls");
  }
});

module.exports = router;

