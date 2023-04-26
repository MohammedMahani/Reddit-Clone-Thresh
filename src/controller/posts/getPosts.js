const { getPostsQuery } = require('../../database');

const getPostsController = (req, res) => {
  getPostsQuery()
    .then((data) => {
      res.status(200).json(data.rows)
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = getPostsController;
