const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { Member } = require("../models");

const auth = () => async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(res.status(401).json({
        status: 401,
        message : "Please authenticate!"
      }));
    }

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      config.jwt.secret_key
    );

    if (!decoded) {
      return next(new Error("Please enter valid token!"));
    }
    const member = await Member.findOne({ _id: decoded.member });
    if (!member) {
      return next(new Error("Please authenticate!"));
    }

    req.member = member;
    next();
  } catch (error) {
    return next(new Error(error));
  }
};

module.exports = auth;
