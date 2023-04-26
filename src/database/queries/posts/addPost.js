const { connection } = require('../../config/connection');

const addPostQuery = ({ content, image }, user_id) => {
  const sql = {
    text: 'INSERT INTO posts (content, image, user_id) VALUES ( $1, $2, $3) RETURNING content, image, user_id',
    values: [content, image, user_id],
  };
  return connection.query(sql);
};
module.exports = addPostQuery;
