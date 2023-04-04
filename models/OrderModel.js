const mongoose = require ('mongoose')
const oderSchema = new mongoose.Schema(
    {
    dishID: {type: Number, required: true, },
    billID: {type: Number, required: true, },
    oderQuantity: {type: Number, required: true},
    oderPrice: {type: Number, required: true},
    oderDiscount: {type: Number, required: true},
    oderToltal: {type: Number, required: true},
    },
    {
    timestamps: true
    }
);

const Oder = mongoose.model("Oder", userSchema);
module.exports = Oder;