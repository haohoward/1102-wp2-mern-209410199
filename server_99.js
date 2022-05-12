//commonJS
//const express =require('express');

//ES6
import express from 'express';

const app = express();

import dotenv from 'dotenv';
dotenv.config();

//db and authenticateUser
import connectDB from './db/connect_99.js';

//middleware
import notFoundMiddleware_99 from './middleware/not-found_99.js';

//errormiddleware
import errorHandlerMiddleware_99 from './middleware/error-handler_99.js';

app.get('/', (req, res) => {
  throw new Error('testing for error');
  res.send('Wellcome Enhao 209410199');
});

app.use(notFoundMiddleware_99);
app.use(errorHandlerMiddleware_99);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_LOCAL_URL).then(() => {
      console.log('Connecting to MongoDB');
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch {
    console.log(err);
  }
};

start();
