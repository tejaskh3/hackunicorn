const mongoose = require('mongoose');

const connectDB = (url) => {
  if (!url) {
    throw new Error("The connection URL must be provided.");
  }
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
module.exports = connectDB;
