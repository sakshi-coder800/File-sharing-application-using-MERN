import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/ImgRoutes.js'
import DBConnection from './Database/db.js';


const app = express();

dotenv.config()
app.use(cors());
app.use("/", router)

// database connection
DBConnection();
const port = process.env.PORT
const mode = process.env.MODE




app.listen(port, () => {
    console.log(`server connected on port ${port} on ${mode}`.bgBlue.white)
})

