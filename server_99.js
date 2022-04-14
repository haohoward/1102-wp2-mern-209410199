//commonJS
//const express =require('express');

//ES6
import express from 'express';

const app =express();

app.get('/',(req,res)=>{
    res.send('Wellcome Enhao 209410199');
});

const port =process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server is running on port ${port}`));