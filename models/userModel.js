const mongoose = require('mongoose');

//schema design

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
    },
}, {timestamps: true})

//export model
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;