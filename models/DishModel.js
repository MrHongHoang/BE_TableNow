const mongoose = require ('mongoose')
const dishSchema = new mongoose.Schema(
    {
    // dishID: {type: Number, required: true, unique: true},
    dishName: {type: String, required: true},
    // restaurentID: {type: Number, required: true, unique: true},
    dishType: {type: String, required: true},
    dishDescribe: {type: String, required: true},
    dishImage: {type: Image, required: true},
    dishQuantity: {type: Number, required: true},
    dishPrice: {type: Number, required: true},
    dishDiscount: {type: Number, required: true},
    },
    {
    timestamps: true
    }
);

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;