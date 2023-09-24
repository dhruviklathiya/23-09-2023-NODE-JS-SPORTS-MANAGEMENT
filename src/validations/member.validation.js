const Joi = require("joi");

const create_member = {
    body: Joi.object().keys({
        member_name: Joi.string().required().trim(),
        member_email: Joi.string().required().trim(),
    })
}

module.exports = {
    create_member
}