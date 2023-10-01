const Joi = require("joi");
  // Validation for sport contact
const create_sport_contact = {
  body: Joi.object().keys({
    sport_contact_path: Joi.string().required().trim(),
    sport_contact_desc: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
  }),
};
  // Exporting validation
module.exports = {
    create_sport_contact
}