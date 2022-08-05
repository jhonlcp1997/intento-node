const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword');
const { tokenSing } = require('../utils/handleJwt');
const { handleHttpError } = require('../utils/handleError');
const { userModel } = require('../models');

/**
 * Encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */

const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password);
        const body = { ...req, password }
        const dataUser = await userModel.create(body);
        dataUser.set("password", undefined, { strict: false });

        const data = {
            token: await tokenSing(dataUser),
            user: dataUser
        }

        res.send({ data });
    } catch (e) {
        handleHttpError(res, "Error_Register_User")
    }
}

/**
 * Este controlador es el encargo de logear un usuario
 * @param {*} req 
 * @param {*} res 
 */

const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await userModel.findOne({email: req.email});
        if(!user){
            handleHttpError(res, "USER_DOESN'T_EXIST", 404)
            return
        }

        const hashPassword = user.password;

        

    } catch (e) {
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
}

module.exports = { registerCtrl, loginCtrl };