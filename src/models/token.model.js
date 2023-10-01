const mongoose = require("mongoose");
// Creating Schema using mongoose
const token_Schema = mongoose.Schema(
  {
    token: {
      type: String,
    },
    expire_time: {
      type: Date,
      default: null,
    },
    member: {
      type: mongoose.Types.ObjectId,
      ref: "Member",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// Creating model using mongoose
const token = mongoose.model("Token", token_Schema);
// Exporting model
module.exports = token;