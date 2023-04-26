const { getCommentsQuery } = require('../../database');

const getCommentsController = (req, res) => {
  getCommentsQuery()
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => res.status(500).send('Internal Server Error'));
};

module.exports = getCommentsController;
