/*
TODO: Los archivos en controllers solo debe hacer el crud a la base de datos
*/

const {tracksModel} = require('../models'); /* todo: Esto funciona siempre y cuando la carpeta tenga un index, y este exporte cualquier elemento con el mismo nombre de la carpeta*/

/*
* Obtener lista de la base de datos!
* @param {*} req
* @param {*} res
*/
const getItems = async(req, res)=>{
    /* Debe tener algo tu solicitud o dará error*/
    const data = await tracksModel.find({});
    res.send({data})
};

/*
* Obtener un detalle
* @param {*} req
* @param {*} res
*/
const getItem = (req, res)=>{};

/*
* Insertar un registro
* @param {*} req
* @param {*} res
*/
const createItem = async(req, res)=>{
    const {body} = req
    console.log(body);

    const data = await tracksModel.create(body);
    console.log(data);
    res.send({data})
};

/*
* Axtualizar un registro
* @param {*} req
* @param {*} res
*/
const updateItem = (req, res)=>{};

/*
* Eliminar un registro
* @param {*} req
* @param {*} res
*/
const deleteItem = (req, res)=>{};

module.exports = ({getItems, getItem, createItem, updateItem, deleteItem});