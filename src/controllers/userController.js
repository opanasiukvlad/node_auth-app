'use strict';

const { normalize, getAllActiveUsers } = require('../services/userService');

async function getAllUsers(req, res, next) {
  const users = await getAllActiveUsers();

  res.send(
    users.map(user => normalize(user))
  );
}

module.exports = {
  getAllUsers,
};
