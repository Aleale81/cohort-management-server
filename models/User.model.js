const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required."],
    },
  },

  {
    timestamps: true,
  }

);

module.exports = model("User", userSchema);
