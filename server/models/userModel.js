const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema(
  {
    name: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

userSchema.statics.findByUsername = function (username) {
  return this.findOne({ name: username });
};

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
