const mongoose = requiere("mongoose")

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
        timestamps:true , //createAt, UpdateAt
        versionKey: false
    }
);

module.exports = mongoose.model("storages", StorageScheme)