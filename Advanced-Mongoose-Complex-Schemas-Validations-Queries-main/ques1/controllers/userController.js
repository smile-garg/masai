const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addAddress = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.addresses.push(req.body);
    await user.save();
    res.status(200).json(user.addresses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserSummary = async (req, res) => {
  try {
    const users = await User.find();
    const summary = {
      totalUsers: users.length,
      totalAddresses: users.reduce((sum, user) => sum + user.addresses.length, 0),
      userDetails: users.map(user => ({
        name: user.name,
        addressCount: user.addresses.length
      }))
    };
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.addresses = user.addresses.filter(addr => addr._id.toString() !== addressId);
    await user.save();
    res.json({ message: 'Address removed', addresses: user.addresses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
