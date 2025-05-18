const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/add-user", async (req, res) => {
  const { name, email } = req.body;

  if (!name || name.length < 3) return res.status(400).json({ error: "Name must be at least 3 characters long" });
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
