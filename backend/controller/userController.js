import { response } from "express";
import User from "../model/userModel.js";



export const addUser = async (req, res) => {
    const user = req.body;
    
    const newUser = new User(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}