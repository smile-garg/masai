const mongoose = require('mongoose');
const validator = require('validator');

const profileSchema = new mongoose.Schema({
  profileName: {
    type: String,
    enum: ["fb", "twitter", "github", "instagram"],
    required: [true, "Profile name is required"]
  },
  url: {
    type: String,
    required: [true, "URL is required"],
    validate: {
      validator: value => validator.isURL(value),
      message: "Invalid URL format"
    }
  }
});

const userSchema = new mongoose.Schema({
  name:     { type: String, required: [true, "Name is required"] },
  email:    { type: String, required: [true, "Email is required"], unique: true },
  password: { type: String, required: [true, "Password is required"], minlength: 6 },
  profiles: [profileSchema]
});

module.exports = mongoose.model('User', userSchema);
