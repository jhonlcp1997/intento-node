/*
TODO: Los archivos en controllers solo debe hacer el crud a la base de datos
*/

const {storageModel} = require('../models'); /* todo: Esto funciona siempre y cuando la carpeta tenga un index, y este exporte cualquier elemento con el mismo nombre de la carpeta*/
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;

/*
* Obtener lista de la base de datos!
* @param {*} req
* @param {*} res
*/
const getItems = async(req, res)=>{
    /* Debe tener algo tu solicitud o dará error*/
    try {
        const data = await storageModel.find({});
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'Error_Get_Items')
    }
};

/*
* Obtener un detalle
* @param {*} req
* @param {*} res
*/
const getItem = async(req, res)=>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await storageModel.findById(id);
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
};

/*
* Insertar un registro
* @param {*} req
* @param {*} res
*/
const createItem = async(req, res)=>{
    const {body, file} = req
    console.log(file);
    console.log(file.filename);
    const fileData ={
        url: `${PUBLIC_URL}/${file.filename}`,
        filename: file.filename
    }
    console.log(fileData);
    const data = await storageModel.create(fileData);
    console.log(data);
    res.send({data})
};

/*
* Axtualizar un registro
* @param {*} req
* @param {*} res
*/
const updateItem = async(req, res)=>{};

/*
* Eliminar un registro
* @param {*} req
* @param {*} res
*/
const deleteItem = async(req, res)=>{};

module.exports = ({getItems, getItem, createItem, updateItem, deleteItem});