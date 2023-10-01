const Joi = require("joi");
const pick = require("../helpers/pick");
// Validate middleware function
// Will take one schema from provided req and another from our predefined validations in validation of joi
const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);

  const object = pick(req, Object.keys(validSchema));

  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new Error(errorMessage));
  }

  Object.assign(req, value);
  return next();
};
// Exporting validate funtion
module.exports = validate;