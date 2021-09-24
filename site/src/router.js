const express = require('express');
const { render } = require('ejs');
const ListController = require('./controllers/ListController');
const router = express.Router()

router.get('/', (req, res) => res.render("index", {page: 'hospedes'}))
router.get('/', ListController.list)

module.exports = router