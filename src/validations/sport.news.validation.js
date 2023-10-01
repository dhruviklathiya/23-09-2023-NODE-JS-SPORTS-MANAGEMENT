const Joi = require("joi");
// Validation for sport news
const create_sport_news = {
  body: Joi.object().keys({
    sport_news_name: Joi.string().required().trim(),
    sport_news_desc: Joi.string().required().trim(),
  }),
};
// Exporting validation
module.exports = {
    create_sport_news
}