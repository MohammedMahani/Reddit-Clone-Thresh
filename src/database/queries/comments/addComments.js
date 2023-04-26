const { connection } = require('../../config/connection');

const addCommentQuery = ({ post_id, user_id, content }) => {
  const sql = {
    text: `INSERT INTO comments (content, user_id, post_id) 
     VALUES ($1,$2,$3) RETURNING *,
      (SELECT username FROM users WHERE users.id = comments.user_id) AS username;`,
    values: [content, user_id, post_id],
  };
  return connection.query(sql);
};

module.exports = addCommentQuery;
