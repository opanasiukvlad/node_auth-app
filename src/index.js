'use strict';

require('dotenv').config();

const cors = require('cors');
const express = require('express');
const { authRouter } = require('./routes/authRouter');

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(authRouter);

app.listen(PORT);
// eslint-disable-next-line no-console
console.log(`Server is running on localhost:${PORT}`);
