const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/hanldleStorage');
const {createItem} = require('../controllers/storage');
// Todo: http://localhost:3000/storage

router.post('/', uploadMiddleware.single('myfile'), createItem)

module.exports = router;