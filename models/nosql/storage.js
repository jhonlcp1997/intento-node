const mongoose = require('mongoose'); //*Siempre se va a requerir mongoose

const StorageScheme = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type:Number
        }
    },
    {
        // *Ponlo tal y como esta en esta parte
        timestamps:true , //createAt, UpdateAt
        versionKey: false
    }
);

module.exports = mongoose.model("storages", StorageScheme) //*Exporta el modelo de mongose con el nombre y su esquema