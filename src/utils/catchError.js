'use strict';

function catchError(action) {
  return async(req, res, next) => {
    try {
      await action(req, res, next);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      next(error);
    }
  };
};

module.exports = {
  catchError,
};
