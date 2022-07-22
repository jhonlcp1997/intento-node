const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
const customHeader = require('../middlewares/customHeader');
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');

// Todo: http://localhost/tracks GET, POST, DELETE, PUT


// *Ruta que nos lista los items
router.get('/', getItems);

// *Ruta que nos permite obtener un detalle de item
router.get('/:id', validatorGetItem, getItem);

// *Ruta que nos crea un item
router.post('/', validatorCreateItem, customHeader, createItem);

// *Ruta que nos permite actualizar un registro
router.put('/:id',validatorGetItem, validatorCreateItem, updateItem);

// *Ruta que nos permite borrar un item
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router //* que no se te ovlide esto