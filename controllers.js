const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const existUser = await User.findOne({ email });
  if (existUser) return res.status(400).json({ msg: 'User already exists' });

  const user = await User.create({ name, email, password });
  const token = generateToken(user._id);

  res.json({ user: { name: user.name, email: user.email, role: user.role }, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }

  const token = generateToken(user._id);
  res.json({ user: { name: user.name, email: user.email, role: user.role }, token });
};
