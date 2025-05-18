const User = require('../models/User');

// Route 1
exports.addUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// Route 2
exports.addProfile = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.profiles.push(req.body);
    await user.save();
    res.json(user.profiles);
  } catch (err) {
    next(err);
  }
};

// Route 3
exports.getUsers = async (req, res, next) => {
  try {
    const { profile } = req.query;
    let users = await User.find();

    if (profile) {
      users = users.filter(u =>
        u.profiles.some(p => p.profileName === profile)
      );
    }

    res.json(users);
  } catch (err) {
    next(err);
  }
};

// Route 4
exports.searchUser = async (req, res, next) => {
  try {
    const { name, profile } = req.query;
    const user = await User.findOne({ name });

    if (!user) return res.status(404).json({ message: "User not found" });

    const foundProfile = user.profiles.find(p => p.profileName === profile);

    if (foundProfile) {
      return res.json({ user: user.name, profile: foundProfile });
    } else {
      return res.json({
        message: "User found, but profile not found",
        user: {
          name: user.name,
          email: user.email,
          profiles: user.profiles
        }
      });
    }
  } catch (err) {
    next(err);
  }
};

// Route 5
exports.updateProfile = async (req, res, next) => {
  try {
    const { userId, profileName } = req.params;
    const { url } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const profile = user.profiles.find(p => p.profileName === profileName);
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    profile.url = url;
    await user.save();
    res.json(profile);
  } catch (err) {
    next(err);
  }
};

// Route 6
exports.deleteProfile = async (req, res, next) => {
  try {
    const { userId, profileName } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.profiles = user.profiles.filter(p => p.profileName !== profileName);
    await user.save();
    res.json({ message: "Profile deleted", profiles: user.profiles });
  } catch (err) {
    next(err);
  }
};
