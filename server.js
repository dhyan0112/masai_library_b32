const express=require('express');
const { connect } = require('./config/db');
const { userRouter } = require('./routes/user.route');
const { bookRouter } = require('./routes/book.route');
const { orderRouter } = require('./routes/order.route');
const { generateToken, generateRefreshToken, verifyToken, verifyRefreshToken, cookieParser }=require('./middleware/authentication');
const app=express();
app.use(express.json());
require('dotenv').config();



app.use('/api',userRouter);
app.use('/api',bookRouter);
app.use(generateToken, generateRefreshToken, verifyToken, verifyRefreshToken, cookieParser);
app.use('/api', orderRouter)

app.listen(process.env.PORT, async()=>{
    try {
        await connect;
        console.log('Connected to Database');
    } catch (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${process.env.PORT}`);
})