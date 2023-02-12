'use strict';

const express = require('express');
const authRouter = new express.Router();
const authController = require('../controllers/authController');
const { catchError } = require('../utils/catchError');

authRouter.post('/registration', catchError(authController.register));

authRouter.get(
  '/activation/:activationToken',
  catchError(authController.activate)
);
authRouter.get('/login', catchError(authController.login));
authRouter.get('/logout', catchError(authController.logout));
authRouter.get('/refresh', catchError(authController.refresh));

module.exports = {
  authRouter,
};
