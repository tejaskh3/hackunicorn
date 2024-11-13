const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  
  name:{
    type:String,
    required:[true,"Please enter name"],
  },
  age:{
    type:Number,
    required:[true,"Please enter age"],
  },
  password:{
    type: String,
    required: [true, "Please enter password"],
    minlenght:[8,"password should have mininum 8 characters"]
  },
  specialization:{
    type:String,
    required:[true,"Please enter specialization"],
  },
  licenseNumber:{
    type:String,
    required:[true,"Please enter License number"]
  },
  email:{
    type:String,
    required:[true,"Please enter your email"],
  },
  address:{
    type:String,
    required:[true,"Please enter your wallet address"]
  },
});

module.exports = mongoose.model('Doctor', DoctorSchema);
