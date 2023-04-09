import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    phont: String
})

const user = mongoose.model('User_Forms', userSchema);

export default user;