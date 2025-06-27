const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const { items } = req.body;
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const order = await Order.create({ userId: req.user._id, items, total });
  res.json(order);
};

exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });
  res.json(orders);
};
