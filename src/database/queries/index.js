const { getCommentsQuery, addCommentQuery } = require('./comments');
const { getPostsQuery, addPostQuery } = require('./posts');
const { signUpQuery, getUserByEmailQuery } = require('./users');

module.exports = {
  signUpQuery,
  getUserByEmailQuery,
  getPostsQuery,
  addPostQuery,
  getCommentsQuery,
  addCommentQuery,
};
