//commonJS
//const express =require('express');

//ES6
import express from 'express';

const app =express();

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect_99.js'

app.get('/',(req,res)=>{
    res.send('Wellcome Enhao 209410199');
});

const port =process.env.PORT || 5000;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_LOCAL_URL).then( ()=>{
            console.log('Connecting to MongoDB');
        });
        app.listen(port,()=>console.log(`Server is running on port ${port}`));
    }catch{
        console.log(err);
    }
}

start();

