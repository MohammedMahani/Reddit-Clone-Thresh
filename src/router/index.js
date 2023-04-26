const router = require('express').Router();
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const commentsRouter = require('./commentsRouter');

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comm', commentsRouter);

module.exports = router;
