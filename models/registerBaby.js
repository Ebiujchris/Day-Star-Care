//  const mongoose = require("mongoose");

// const registerBabySchema = new mongoose.Schema({
//   fullName: String,
//   gender: String,
//   age: Number,
//   location: String,
//   broughtBy: String,
//   arrivalTime: String,
//   pickedBy: String,
//   departureTime: String,
//   parent1Name: String,
//   parent2Name: String,
//   fee: Number,
//   periodOfStay: String,
//   babyNumber: { type: Number, unique: true },
//   contacts: Number,
//   dateOfPayment: Date,
//   sitterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sitter' },
//   status: String,
//   paid: { type: Boolean, default: false },
//   totalPayments: {
//     type: Number,
//     default: 0,
//   },
// });

// module.exports = mongoose.model("Register", registerBabySchema);

const mongoose = require("mongoose");

const registerBabySchema = new mongoose.Schema({
  fullName: String,
  gender: String,
  age: Number,
  location: String,
  broughtBy: String,
  arrivalTime: String,
  pickedBy: String,
  departureTime: String,
  parent1Name: String,
  parent2Name: String,
  fee: Number,
  periodOfStay: String,
  babyNumber: { type: Number, unique: true },
  contacts: Number,
  dateOfPayment: Date,
  sitterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sitter' },
  status: String,
  paid: { type: Boolean, default: false },
  totalPayments: { type: Number, default: 0 },
});

module.exports = mongoose.model("Register", registerBabySchema);
