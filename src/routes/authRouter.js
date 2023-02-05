'use strict';

const express = require('express');
const authRouter = new express.Router();
const authController = require('../controllers/authController');

authRouter.post('/registration', authController.register);

module.exports = {
  authRouter,
};
