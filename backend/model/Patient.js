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
    password: {
      type: String,
      required: [true, "Please enter password"],
      minlenght: [8, "password should have mininum 8 characters"],
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
    secretKey: {
      type: String,
      required: true,
      default: function () {
        return Math.random().toString(36).substring(2, 7).toUpperCase();
      },
      minlength: 5,
      maxlength: 5,
    },
  });
module.exports = mongoose.model('Patient', PatientSchema);


