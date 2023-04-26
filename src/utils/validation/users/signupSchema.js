const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().min(3).max(30).required()
    .messages({
      'string.empty': 'Username is required !',
      'string.min': 'Username must be at least 3 chars',
      'string.max': 'Username must be at most 30 chars',
      'any.required': 'Username is required',
    }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be email',
    'string.empty': 'Email is required !',
    'any.required': 'Email is required',

  }),
  password: Joi.string().min(8).pattern(new RegExp(/^[a-zA-Z0-9]{8,}$/)).required()
    .messages({
      'string.empty': 'password is required !',
      'string.min': 'password must be at least 8 chars',
      'any.required': 'password is required',

    }),
  confirmPassword: Joi.ref('password'),
});

module.exports = signupSchema;
