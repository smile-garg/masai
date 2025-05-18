const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  bio: String,
  socialMediaLinks: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true
  }
});

module.exports = mongoose.model("Profile", profileSchema);
