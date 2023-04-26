const { ValidationError } = require('joi');
const { JsonWebTokenError } = require('jsonwebtoken');
const CustomeError = require('../../utils/helper/customeError');

const serverError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: true,
      data: {
        detalis: err.details,
      },
    });
  }
  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      error: true,
      data: {
        message: 'Unauthorized!',
      },
    });
  }

  if (err instanceof CustomeError) {
    return res.status(err.status).json({
      error: true,
      data: {
        meesage: err.message,
      },
    });
  }
  res.status(500).json({
    error: true,
    data: {
      message: err.message,
    },
  });
};

module.exports = serverError;
