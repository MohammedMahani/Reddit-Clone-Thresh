const { connection } = require('../../config/connection');

const signUpQuery = ({ username, email, password }) => {
  const sql = {
    text: `INSERT INTO users (username, email, password)
         VALUES ($1, $2, $3)
         RETURNING id, username, email`,
    values: [username, email, password],
  };

  return connection.query(sql);
};

module.exports = signUpQuery;
