const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // restaurantID: { type: String, required: true },
    Username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    phone: { type: String, required: true },
    // access_token: {type: String, required: true},
    // refresh_token: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
