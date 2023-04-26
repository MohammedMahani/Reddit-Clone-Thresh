const bcrypt = require('bcrypt');
const { getUserByEmailQuery } = require('../../database');
const { CustomeError, signToken, signinSchema } = require('../../utils');

const signinController = (req, res, next) => {
  const { email, password } = req.body;
  signinSchema.validateAsync(req.body, {abortEarly: false})
    .then(() => getUserByEmailQuery({ email }))
    .then(({ rows }) => {
      if (!rows.length) {
        throw new CustomeError('Invalid email or password', 400);
      }
      return rows[0];
    })
    .then((data) => {
      req.user = data;
      return bcrypt.compare(password, data.password);
    })
    .then((result) => {
      if (!result) {
        throw new CustomeError('Invalid email or password', 400);
      }
    })
    .then(() => {
      const { id, username, email } = req.user;
      return signToken({ id, username, email }, { expiresIn: '1d' });
    })
    .then((token) => {
      const { id, username, email } = req.user;
      res
        .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
        .json({
          error: false,
          data: {
            message: 'User Logged in successfully',
            user: { id, username, email },
          },
        });
    })

    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = signinController;
