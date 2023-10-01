const jwt = require("jsonwebtoken");
const { Token } = require("../models");
const config = require("../config/config");
// Creating token
const generate_token = async (reqbody) => {
  let payload = {
    ...reqbody,
    expire_time: reqbody.expire_time.unix(),
  };

  return jwt.sign(payload, config.jwt.secret_key);
};
// Saving token
const save_token = async (reqbody) => {
  return Token.findOneAndUpdate(
    { member: reqbody.member },
    {
      $set: {
        ...reqbody,
      },
    },
    { new: true, upsert: true }
  );
};
// Exporting service object
module.exports = {
  generate_token,
  save_token,
};