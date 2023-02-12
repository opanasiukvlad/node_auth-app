'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const { User } = require('../models/User');
const { ApiError } = require('../exceptions/ApiError');
const { sendActivationLink } = require('../services/emailService');

function normalize({ id, email }) {
  return {
    id,
    email,
  };
};

function createUser(email, password, activationToken) {
  return User.create({
    email,
    password,
    activationToken,
  });
}

function getOneUser(activationToken) {
  return User.findOne({
    where: { activationToken },
  });
};

function getAllActiveUsers() {
  return User.findAll({
    where: { activationToken: null },
  });
};

function getByEmail(email) {
  return User.findOne({
    where: { email },
  });
}

async function registerUser({ email, password }) {
  const existingUser = await getByEmail(email);

  if (existingUser) {
    throw ApiError.BadRequest('Email is already taken', {
      email: 'Email is already taken',
    });
  }

  const hash = await bcrypt.hash(password, 10);
  const activationToken = uuidv4();

  await createUser(
    email,
    hash,
    activationToken,
  );

  await sendActivationLink(email, activationToken);
}

module.exports = {
  normalize,
  getOneUser,
  getAllActiveUsers,
  getByEmail,
  registerUser,
};
