const { connection } = require('../../config/connection');

const getPostsQuery = () => {
  const query = `SELECT p.*, u.username AS username, 
  json_agg(json_build_object('id', c.id, 'content', c.content, 'username', uc.username)) AS comments
  FROM posts p
  LEFT JOIN comments c ON p.id = c.post_id
  LEFT JOIN users u ON p.user_id = u.id
  left join users uc ON c.user_id = uc.id
  GROUP BY p.id, u.username
  `;

  return connection.query(query);
};

module.exports = getPostsQuery;
