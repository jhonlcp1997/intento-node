const express = require('express');
const { matchedData, body } = require("express-validator");
const { validatorRegister } = require('../validators/auth');
const router = express.Router();


// Todo: CREAR UN REGISTRO
router.post('/register', validatorRegister, (req, res)=>{
    req = matchedData(req)
    res.send({data:req});
});


module.exports = router;