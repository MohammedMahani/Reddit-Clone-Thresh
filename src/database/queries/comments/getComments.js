const { connection } = require('../../config/connection');

const getCommentsQuery = () => {
  const query = `SELECT users.username, comments.content FROM comments JOIN users
   ON comments.user_id = users.id JOIN posts ON posts.user_id = comments.user_id`;
  return connection.query(query);
};

module.exports = getCommentsQuery;
