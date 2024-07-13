// /server/routes/registerRouter.js
const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Hypothetical User model for database operations

router.post('/', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Create and save the new user
    const newUser = new User({ username, password, email });
    await newUser.save();

    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

module.exports = router;
