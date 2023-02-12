'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const { authRouter } = require('./routes/authRouter');
const { userRouter } = require('./routes/userRouter');
const { errorMiddleware } = require('./middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(authRouter);
app.use('/users', userRouter);
app.use(errorMiddleware);

app.listen(PORT);
// eslint-disable-next-line no-console
console.log(`Server is running on localhost:${PORT}`);
