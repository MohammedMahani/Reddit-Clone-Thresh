const { addPostQuery } = require('../../database');

const addPostController = (req, res) => {
  const { content, image } = req.body;
  addPostQuery({ content, image }, req.user.id)
    .then((data) => res.status(200).json({
      massage: 'create account successfully',
      data: data.rows[0],
    })).catch((err) => res.status(500).send(`error server${err}`));
};

module.exports = addPostController;
