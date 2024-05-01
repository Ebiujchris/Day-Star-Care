const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const createAccountSchema = new mongoose.Schema({
  name:{
    type: String,
    trim: true
  },
  nationalId: {
    type: String,
    unique: true
  },  
  gender:{
    type: String,
    trim: true
  },
  address:{
    type: String,
    trim: true
  },
  contact: [{
    type: String,
    trim: true
  }],
  
  nextOfKin:{
    type: String,
    trim: true
  },
  nextOfKinContact:{
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
  },
  //  password:{
  //    type:String,   delete password.only exists in db
  //    trim:true
  //  },                    
});

createAccountSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("RegisterStaff", createAccountSchema);
