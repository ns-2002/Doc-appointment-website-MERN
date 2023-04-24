const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/test');
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
