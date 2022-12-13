import mongoose from "mongoose";

const mongoDB = () => {

    try {
        // Remove console warning...
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        
        console.log("Connected To MongoDB ==> OK ✅");
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default mongoDB;