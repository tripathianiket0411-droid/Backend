const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://tripathianiket0411_db_user:Aniket12345@clustermern.njc2ju7.mongodb.net/")

        console.log("mongodb is coonected");
        
    } catch (error) {   
        console.log("error in connecting to db", error);
        
    }
}

module.exports = connectDB;