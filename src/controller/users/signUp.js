const bcrypt = require('bcrypt');
const { signupSchema, signToken } = require('../../utils');
const { signUpQuery } = require('../../database');

const signUpController = (req, res, next) => {
  const {
    username, email, password, confirmPassword,
  } = req.body;

  signupSchema.validateAsync({
    username, email, password, confirmPassword,
  }, { abortEarly: false })
    .then(() => bcrypt.hash(password, 10))
    .then((hash) => ({ username, email, password: hash }))
    .then((data) => signUpQuery(data))
    .then((data) => data.rows[0])
    .then((data) => {
      req.user = data;
      return signToken(data, { expiresIn: '1d' });
    })
    .then((token) => {
      res
        .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
        .json({
          error: false,
          data: {
            msg: 'user created successful',
            user: req.user,
          },
        });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = signUpController;
