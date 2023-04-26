const commentsRouter = require('express').Router();
const { getCommentsController, addCommentController } = require('../controller');
const checkAuth = require('../middlewares/checkAuth');

commentsRouter.get('/cc', getCommentsController);
commentsRouter.post('/addcomment', checkAuth, addCommentController);

module.exports = commentsRouter;
