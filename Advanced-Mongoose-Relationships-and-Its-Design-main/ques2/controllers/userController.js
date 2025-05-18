const User = require("../models/User");
const Book = require("../models/Book");

// Create user
exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get user rentals
exports.getUserRentals = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("rentedBooks");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user.rentedBooks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
