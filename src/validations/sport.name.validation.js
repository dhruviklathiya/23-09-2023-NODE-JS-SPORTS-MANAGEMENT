const Joi = require("joi");
// Validation for sport
const create_sport = {
  body: Joi.object().keys({
    sport_name: Joi.string().required().trim(),
    sport_desc: Joi.string().required().trim(),
    sport_image: Joi.string().allow("")
  }),
};
// Exporting validation
module.exports = {
    create_sport
}