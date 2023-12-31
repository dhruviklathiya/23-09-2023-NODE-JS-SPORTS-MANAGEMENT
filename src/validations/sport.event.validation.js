const Joi = require("joi");
// Validation for sport event
const create_sport_event = {
  body: Joi.object().keys({
    sport_event_name: Joi.string().required().trim(),
    sport_event_desc: Joi.string().required().trim(),
    sport_event_duration: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
  }),
};
// Exporting validation
module.exports = {
    create_sport_event
}