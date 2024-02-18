import dotenv from 'dotenv';
import mongoose from 'mongoose';
// const DBConnect=(username,password)=>{ // assigning both in the url 
const DBConnect = () => {
    const url = process.env.MONG_URL
    try {
        const connection = mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log(`connect succesfully  `,)
    } catch (error) {
        console.log("Error in create connection", error)
    }
}
export default DBConnect;