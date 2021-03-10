// Initialises routes for /search using express router

const express = require('express');
const router = express.Router();

const Search = require('../models/search');

router.get('/', (req, res) => {
  const searchData = Search.all;
  res.send(searchData);
});

router.get('/:keyword', (req, res) => {
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
