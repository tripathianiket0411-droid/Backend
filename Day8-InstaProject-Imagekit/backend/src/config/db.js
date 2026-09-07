const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("mongodb connected");
    
  } catch (error) {
    console.log("error in connecting to mongo bata base ", error);
  }
};

module.exports = connectDB;
