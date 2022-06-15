/*
TODO: Los archivos en controllers solo debe hacer el crud a la base de datos
*/

const {storageModel} = require('../models'); /* todo: Esto funciona siempre y cuando la carpeta tenga un index, y este exporte cualquier elemento con el mismo nombre de la carpeta*/

/*
* Obtener lista de la base de datos!
* @param {*} req
* @param {*} res
*/
const getItems = async(req, res)=>{
    /* Debe tener algo tu solicitud o dará error*/
    const data = await storageModel.find({});
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
    const {body, file} = req
    console.log(file);
    const fileData ={
        filename: file.filename
    }
    // const data = await storageModel.create({body});
    // console.log(data);
    res.send({file})
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