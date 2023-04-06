const mongoose = require ('mongoose')
const profileSchema = new mongoose.Schema(
    {
    restaurentName: {type: String, required: true},
    restaurentAdress: {type: String, required: true},
    restaurentTable: {type: Number, required: true},
    openTime: {type: String, required: true},
    closeTime: {type: String, required: true},
    restaurentDescribe: {type: String, required: true},
    // reviewImages: [{type: URL, required: true}],
    },
    {
    timestamps: true
    }
);

const ProfileRestaurent = mongoose.model("ProfileRestaurent", profileSchema);
module.exports = ProfileRestaurent;