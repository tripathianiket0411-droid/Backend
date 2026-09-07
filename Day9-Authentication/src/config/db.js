import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

export const connectDB = async () => {
    await mongoose.connect(process.env.mongodb_uri)
    console.log("database connected successfully ");
    
} 