import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.mongodb;

const connectDB = async () => {
    try {
        mongoose.connect(MONGODB_URL);
        console.log("Connected to database successfully");
    }
    catch (error) {
        console.log(error);
        console.log("Could not connect database!");
    }
}
export default connectDB