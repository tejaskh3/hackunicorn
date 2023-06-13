const mongoose = require('mongoose');


  const PatientSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    age: {
      type: Number,
      required: [true, "Please enter age"],
    },
    password:{
      type: String,
      required: [true, "Please enter password"],
      minlenght:[8,"password should have mininum 8 characters"]
    },
    sex: {
      type: String,
      required: [true, "Please enter your sex"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    address: {
      type: String,
      required: [true, "Please enter your wallet address"],
    },

});
module.exports = mongoose.model('Patient', PatientSchema);


