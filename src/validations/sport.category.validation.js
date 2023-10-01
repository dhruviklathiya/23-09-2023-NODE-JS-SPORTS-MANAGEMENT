const Joi = require("joi");

// Validation for sport category
const create_sport_category = {
  body: Joi.object().keys({
    sport_category_name: Joi.string().required().trim(),
    sport_category_desc: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
  }),
};
// Exporting validation
module.exports = {
    create_sport_category
}