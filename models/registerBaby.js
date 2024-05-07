const mongoose = require("mongoose");

const registerBabySchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  droppedBy:{
    type: String,
    trim :true
  },
  arrivalTime: {
    type: String,
    trim: true
  },
  pickedBy:{
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
  },
  parent2Name: {
    type: String,
    trim: true
  },
  fee: {
    type: Number,
    trim: true
  },
  periodOfStay: {
    type: String,
    trim: true
  },
  babyNumber: {
    type: Number,
    Unique: true  
  },
  contacts: {
    type: Number,
    trim: true
  },
  status: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Register", registerBabySchema);
