'use strict';

require('dotenv').config();

const { send } = require('./services/emailService');

send({
  email: 'tacac36427@crtsec.com',
  subject: 'Hello email!',
  html: '<h1>HELLO EMAIL!</h1>',
})
// eslint-disable-next-line no-console
  .catch(error => console.log(error));
