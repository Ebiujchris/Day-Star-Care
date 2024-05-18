const mongoose = require("mongoose");

const ToySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    trim: true
  },
  
});

module.exports = mongoose.model("Dolls",ToySchema);

