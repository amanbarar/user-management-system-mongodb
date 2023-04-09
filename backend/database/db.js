import mongoose from "mongoose";


const Connection = async () => {
    const URL = 'mongodb://127.0.0.1:27017/User-Management-System';
    try{
        await mongoose.connect(URL)
        console.log("Database connected successfully");
    } catch(err){
        console.log("Error while connecting to database ",err);
    }
}

export default Connection;