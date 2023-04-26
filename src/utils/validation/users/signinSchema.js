const Joi = require('joi');

const signinSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'string.empty': 'email is required !',
      'string.email': 'Not valid email',
      'any.required': 'email is required',
    }),
  password: Joi.string().min(8).pattern(new RegExp(/^[a-zA-Z0-9]{8,}$/)).required()
    .messages({
      'string.empty': 'password is required !',
      'string.min': 'password must be at least 8 chars',
      'any.required': 'password is required',
    }),
});

module.exports = signinSchema;
