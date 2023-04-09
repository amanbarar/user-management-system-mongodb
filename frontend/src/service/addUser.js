import axios from 'axios';

const URL = 'http://localhost:5000';

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`, data);
    } catch(err) {
        console.log("Error while connecting addUser", err);
    }
}