const userModel = require('../models/userModel');

exports.register = (req, res) => {
  const { username, password } = req.body;
  userModel.createUser(username, password, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'User registration failed' });
    }
    res.status(201).json({ success: true, message: 'User registered successfully' });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  userModel.findUser(username, (err, results) => {
    if (err || results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    res.status(200).json({ success: true, message: 'Login successful' });
  });
};
