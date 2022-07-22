const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/hanldleStorage');
const validatorGetItem = require('../validators/storage')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/storage');
// Todo: http://localhost:3000/storage

// *Ruta que nos lista los items
router.get('/', getItems);

// *Ruta que nos permite obtener un detalle de item
router.get('/:id', getItem);

// *Ruta que nos permite borrar un item
router.delete('/:id', deleteItem);

router.post('/', uploadMiddleware.single('myfile'), createItem)


module.exports = router;