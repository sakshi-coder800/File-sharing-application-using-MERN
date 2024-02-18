import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';



const app= express();

dotenv.config()
app.use(cors());

const port=process.env.PORT
const mode=process.env.MODE




app.listen(port,()=>{
    console.log(`server connected on port ${port} on ${mode}`.bgBlue.white)
})

