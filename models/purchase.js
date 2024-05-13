const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
  itemType: {
    type: String,
    trim: true
  },
  itemName: {
    type: String,
    trim: true
  },
  quantity: {
    type: String,
    trim: true
  },
  price: {
    type: String,
    trim: true
  },
  purchaseDate: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Purchase", PurchaseSchema);