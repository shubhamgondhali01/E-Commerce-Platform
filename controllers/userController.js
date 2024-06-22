const User = require('../models/user');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


exports.registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ message: 'Failed to register user' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.isValidPassword(password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(500).json({ message: 'Failed to login' });
  }
};


exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find({}, '-password'); // Exclude password field
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  };