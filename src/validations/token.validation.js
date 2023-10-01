const Joi = require("joi");
// Validation for generating token
const generate_token = {
  body: Joi.object({
    member: Joi.string().required().trim(),
  }),
};
// Exporting validation
module.exports = {
    generate_token,
};
