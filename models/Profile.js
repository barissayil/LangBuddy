const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  location: {
    type: String
  },
  gender: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  fluentLanguages: {
    type: [String],
    required: true
  },
  learningLanguages: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
