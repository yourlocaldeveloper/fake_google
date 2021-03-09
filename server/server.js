const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const searchRoute = require('./controllers/searchs');
app.use('/search', searchRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Fake Google!');
});

module.exports = app;
