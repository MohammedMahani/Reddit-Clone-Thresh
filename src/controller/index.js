const { signUpController, signinController, logout } = require('./users');
const { clientError, serverError } = require('./errors');
const { getPostsController } = require('./posts');
const { getCommentsController, addCommentController } = require('./comments');

module.exports = {
  signUpController,
  signinController,
  logout,
  getPostsController,
  getCommentsController,
  addCommentController,
  clientError,
  serverError,
};
