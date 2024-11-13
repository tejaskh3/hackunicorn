const mongoose = require('mongoose');

const connectDB = (url) => {
  if (!url) {
    throw new Error("The connection URL must be provided.");
  }
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
}
module.exports = connectDB;
