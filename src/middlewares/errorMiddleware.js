'use strict';

const { ApiError } = require('../exceptions/ApiError');

// eslint-disable-next-line handle-callback-err
function errorMiddleware(error, req, res, next) {
  if (error instanceof ApiError) {
    const { status, message, errors } = error;

    res.status(status).send({
      message,
      errors,
    });
  }

  res.status(500).send({
    message: 'Unexpected error',
  });
};

module.exports = {
  errorMiddleware,
};
