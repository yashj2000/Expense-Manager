const express = require('express');
const { addTransaction, getAllTransactions} = require('../controllers/transactionCtrl');

//router object
const router = express.Router();

//routers
//POST || add transaction
router.post('/add-transaction', addTransaction);

//POST || get all transactions
router.post('/get-all-transactions', getAllTransactions);

module.exports = router;