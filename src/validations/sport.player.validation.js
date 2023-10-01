const Joi = require("joi");
// Validation for sport player
const create_sport_player = {
  body: Joi.object().keys({
    sport_player_name: Joi.string().required().trim(),
    sport_player_desc: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
  }),
};
// Exporting validation
module.exports = {
    create_sport_player
}