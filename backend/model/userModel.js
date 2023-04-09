import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";


const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    phont: String
})

const autoIncrementInitialize = async () => {
    try{
        await autoIncrement.initialize(mongoose.connection);
    } catch (err) {
        console.log("Auto increment initialization error: ", err);
    }
}

const autoIncrementPlugin = async () => {
    try {
        await userSchema.plugin(autoIncrement.plugin, 'User_Forms');
    } catch (err) {
        console.log("Auto increment plugin error: ", err);
    }
}

const user = mongoose.model('User_Forms', userSchema);

export default user;