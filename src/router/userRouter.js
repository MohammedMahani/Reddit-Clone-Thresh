const userRouter = require('express').Router();
const { signUpController, signinController, logout } = require('../controller');

userRouter.post('/signup', signUpController);
userRouter.post('/signin', signinController);
userRouter.get('/logout', logout);

module.exports = userRouter;
