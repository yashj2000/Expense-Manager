const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDB');

//config env file
dotenv.config();

//connect to db
connectDb();

//rest object
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
// user routes
app.use('/api/v1/users', require('./routes/userRoute'));

// transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoute'));

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold);
});