const postRouter = require('express').Router();
const { getPostsController } = require('../controller/posts');
const addPostController = require('../controller/posts/addPost');
const checkAuth = require('../middlewares/checkAuth');

const getPostsControll = (req, res) => {
  res.json({
    error: false,
    data: {
      posts: ['post1', 'post2'],
    },
  });
};
postRouter.get('/addpost', getPostsController);

postRouter.post('/hhoo', checkAuth, addPostController);

postRouter.get('/', checkAuth, getPostsControll);

module.exports = postRouter;
