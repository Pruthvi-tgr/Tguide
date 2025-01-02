
const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

// Add expense
router.post('/', async (req, res) => {
  const { user, amount, description } = req.body;
  try {
    const newExpense = new Expense({ user, amount, description });
    await newExpense.save();
    res.status(201).json({ message: 'Expense added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding expense' });
  }
});

// Get expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching expenses' });
  }
});

module.exports = router;
