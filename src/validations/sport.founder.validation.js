const Joi = require("joi");
// Validation for sport founder
const create_sport_founder = {
  body: Joi.object().keys({
    sport_founder_name: Joi.string().required().trim(),
    sport_founder_desc: Joi.string().required().trim(),
    sport:Joi.string().required().trim(),
  }),
};
// Exporting validation
module.exports = {
    create_sport_founder
}