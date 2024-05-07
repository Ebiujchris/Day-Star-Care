const mongoose = require("mongoose");

const SitterSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  age: {
    type: Number,
    trim : true
  },
  gender: {
    type: String,
    required: true
  },
  nextOfKin: {
    type: String,
    trim: true
  },
  nin: {
    type: String,
    unique: true
  },
  recommender: {
    type: String,
    required: true,
    trim: true
  },
  religion: {
    type: String,
    trim: true
  },
  education: {
    type: String,
    trim: true
  },
  sitterNumber: {
    type: Number,
    unique: true
  },
  contacts: {
    type: String,
    trim: true
  },
  
});

module.exports = mongoose.model("Sitter", SitterSchema);
