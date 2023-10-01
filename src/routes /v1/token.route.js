const express = require("express");
const validate = require("../../middlewares/validate");
const { token_Validation } = require("../../validations");
const { token_Controller } = require("../../controllers");
const auth = require("../../middlewares/auth");
const router = express.Router();
// Defining route
router.post(
  "/create-token",
  validate(token_Validation.generate_token),
  token_Controller.generate_token
);
router.get("/verify-token", auth(), token_Controller.verify_token);
// Exporting router
module.exports = router;