const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log(" milan  safal hua ");
        
    } catch (error) {
        console.log("error in while connecting to database", error);
        
    }
}

module.exports = connectDB