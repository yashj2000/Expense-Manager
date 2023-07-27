const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: [true, 'Please enter amount']
    },
    type: {
        type: String,
        required: [true, 'Please enter type']
    },
    category: {
        type: String,
        required: [true, 'Please enter category']
    },
    reference: {
        type: String,
        // required: [true, 'Please enter reference']
    },
    description: {
        type: String,
        required: [true, 'Please enter description']
    },
    date : {
        type: Date,
        required: [true, 'Please enter date']
    },
    //add timestamps
}, { timestamps: true}
);

const transactionModel = mongoose.model('transactions', transactionSchema);
module.exports = transactionModel;