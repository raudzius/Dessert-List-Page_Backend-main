const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log('Connected ok');
  })
  .catch((e) => {
    console.log(e);
    console.log('Connection error');
  });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4000);
