const { addCommentQuery } = require('../../database');

const addCommentController = (req, res) => {
  const user_id = req.user.id;
  const { content, post_id } = req.body;
  return addCommentQuery({ post_id, user_id, content })
    .then((data) => res.status(200).json({
      massage: 'post done comment',
      data: data.rows[0],
    })).catch((err) => res.status(500).send(`error server${err}`));
};

module.exports = addCommentController;
