const mongoose = require("mongoose");

const DollSchema = new mongoose.Schema({
  iteName: {
    type: String,
    trim: true
  },
  itemDescription: {
    type: String,
    trim: true
  },
  itemPrice: {
    type: String,
    trim: true
  },
  itemImage: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Dolls",DollSchema);