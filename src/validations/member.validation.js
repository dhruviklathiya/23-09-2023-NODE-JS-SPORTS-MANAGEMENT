const Joi = require("joi");
// Validation for create member
const create_member = {
    body: Joi.object().keys({
        member_name: Joi.string().required().trim(),
        member_email: Joi.string().required().trim(),
    })
}
// Exporting validation
module.exports = {
    create_member
}