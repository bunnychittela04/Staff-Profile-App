const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');

router.post('/submit', async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json({ message: 'Staff profile saved successfully.' });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).json({ error: 'Failed to save staff profile.' });
  }
});

module.exports = router;
