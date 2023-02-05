'use strict';

const { User } = require('../models/User');

async function register(req, res, next) {
  const { email, password } = req.body;

  const user = await User.create({
    email,
    password,
  });

  res.send(user);
}

module.exports = {
  register,
};
