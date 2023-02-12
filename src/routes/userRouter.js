'use strict';

const express = require('express');
const userRouter = new express.Router();
const userController = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { catchError } = require('../utils/catchError');

userRouter.get(
  '/',
  catchError(authMiddleware),
  catchError(userController.getAllUsers)
);

module.exports = {
  userRouter,
};
