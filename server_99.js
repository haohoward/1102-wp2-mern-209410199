import connectDB from './db/connect_99.js';
import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import notFoundMiddleware_99 from './middleware/not-found_99.js';
import errorHandlerMiddleware_99 from './middleware/error-handler_99.js';
import authRoutes_99 from './routes/authRoutes_99.js';
import cors from 'cors';

const app = express();
app.use(cors());
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
  // throw Error("test");
  res.send('Welcome');
});

app.use('/api/v1/auth_99', authRoutes_99);

app.use(notFoundMiddleware_99);
app.use(errorHandlerMiddleware_99);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_LOCAL_URL).then(() => {
      console.log('Success Connect');
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
