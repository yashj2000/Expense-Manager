const moment = require('moment');
const transactionModel = require('../models/transactionModel');

const getAllTransactions = async (req, res) => {
    try {
        const {frequency, selectedDate, type} = req.body;
        const transactions = await transactionModel.find({
            ...(frequency !== 'custom' ? {
            date: {
                $gte: moment().subtract(Number(frequency), 'd').toDate(),
            },
        } : {
            date: {
                $gte: selectedDate[0],
                $lte: selectedDate[1]
            }
        }),
        userid: req.body.userid,
        ...(type !== 'all' && {type})
    });
        res.status(200).json(transactions);
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({msg: error.message});
    }
};

const addTransaction = async (req, res) => {
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).send('Trnsaction added successfully');
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({msg: error.message});
    }
};

module.exports = {getAllTransactions, addTransaction};