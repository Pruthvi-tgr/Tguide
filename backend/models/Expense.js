
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  user: String,
  amount: Number,
  description: String,
});

module.exports = mongoose.model('Expense', ExpenseSchema);
