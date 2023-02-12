'use strict';

const { ApiError } = require('../exceptions/ApiError');
const { validateAccessToken } = require('../services/jwtService');

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    throw ApiError.Unauthorized();
  }

  const [, accessToken] = authHeader.split(' ');

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = validateAccessToken(accessToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  next();
};

module.exports = {
  authMiddleware,
};
