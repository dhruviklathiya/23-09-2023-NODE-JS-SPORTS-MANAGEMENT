const Joi = require("joi");
// Validation for sport gallery
const create_sport_gallery = {
  body: Joi.object().keys({
    sport_gallery_name: Joi.string().required().trim(),
    sport_gallery_desc: Joi.string().required().trim(),
  }),
};
// Exporting validation
module.exports = {
    create_sport_gallery
}