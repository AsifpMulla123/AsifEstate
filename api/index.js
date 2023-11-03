import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from '../api/routers/user-router.js';
import authRouter from '../api/routers/auth-router.js';
import listingRouter from '../api/routers/listing-router.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

mongoose.connect(process.env.MONGOURI).then(() => {
    console.log("connected to mongodb successfully");
}).catch((e) => {
    console.log("error", e);
});
const app = express();

app.listen(3000, () => {
    console.log("Server Started successfully at 3000");
});

const __dirname = path.resolve();
// decoding the user data ----> Middleware
app.use(express.json());
app.use(cookieParser());

// custome router
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})
//Handling error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
}); 