import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';

const port = process.env.PORT || 8000;

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:8081', // Set your frontend URL here
  credentials: true,
}));

// API Routes
app.use("/api/v1/user", userRoute);


// Server Start
app.listen(port, () => {
  connectDB();
  console.log(`Server is listening on port ${port}`);
});
