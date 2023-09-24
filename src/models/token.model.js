const mongoose = require("mongoose");

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

const token = mongoose.model("Token", token_Schema);

module.exports = token;