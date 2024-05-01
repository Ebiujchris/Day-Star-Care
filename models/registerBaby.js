const mongoose = require("mongoose");

const registerBabySchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
    unique: true // Ensure unique full names
  },
  gender: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
  
  },
  location: {
    type: String,
    trim: true
  },
  arrivalTime: {
    type: String,
    trim: true
  },
  departureTime: {
    type: String,
    trim: true
  },
  parent1Name: {
    type: String,
    trim: true,
    required: true
  },
  parent2Name: {
    type: String,
    trim: true
  },
  fee: {
    type: String,
    trim: true
  },
  periodOfStay: {
    type: String,
    trim: true
  },
  babyNumber: {
    type: Number,
    unique: true 
  },
  contacts: [{
    type: String,
    trim: true,
    required: true
  }]
});

module.exports = mongoose.model("Register", registerBabySchema);
