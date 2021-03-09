const express = require('express');
const router = express.Router();

const Search = require('../models/search');
const { route } = require('../server');

route.get('/', (req, res) => {
  const searchData = Search.all;
  res.send(searchData);
});

route.get('/:keyword', (req, res) => {
  try {
    const keyword = req.params.keyword;
    const matchedWebsite = Search.findByKeyword(keyword);
    res.send(matchedWebsite);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

module.exports = router;
