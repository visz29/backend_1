// require('dotenv').config({path: './env'})
import dotenv from "dotenv"


import express from 'express';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})


connectDB()





















/*
const app = express()
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App Listening in port ${process.env.PORT}`);
        })


    } catch (error){
        console.error("ERROR : ",error);
        throw err
    }
})()
*/