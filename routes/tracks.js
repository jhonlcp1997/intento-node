const express = require('express');
const { getItems, getItem, createItem } = require('../controllers/tracks');
const router = express.Router();
const {validatorCreateItem} = require('../validators/tracks');

// Todo: http://localhost/tracks GET, POST, DELETE, PUT

router.get('/', getItems);

router.post('/', validatorCreateItem, createItem);

module.exports = router //* que no se te ovlide esto