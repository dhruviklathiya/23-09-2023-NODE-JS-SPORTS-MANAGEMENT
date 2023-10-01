const Joi = require("joi");

// Validation for sport coach
const create_sport_coach = {
  body: Joi.object().keys({
    sport_coach_name: Joi.string().required().trim(),
    sport_coach_desc: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
    sport_team: Joi.string().required().trim(),
  }),
};
// Exporting validation
module.exports = {
    create_sport_coach
}