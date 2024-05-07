const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
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
  contact: {
    type: String,
    trim: true
  },
  
  nextOfKin:{
    type: String,
    trim: true
  },
 
  email: {
    type: String,
    unique: true,
  },
  password:{
    type : String,
    trim: true
   },                    
});

signupSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("SignUp", signupSchema);
