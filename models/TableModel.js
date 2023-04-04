const mongoose = require ('mongoose')
const tableSchema = new mongoose.Schema(
    {
    tableID: {type: Number, required: true, unique: true},
    restaurentID: {type: Number, required: true, unique: true},
    tableName: {type: String, required: true},
    active: {type: Boolean, default: false, required: true},
   
    },
    {
    timestamps: true
    }
);

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;