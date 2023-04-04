const mongoose = require ('mongoose')
const profileSchema = new mongoose.Schema(
    {
    restaurentName: {type: String, required: true},
    // restaurentID: {type: Number, required: true},
    restaurentAdress: {type: String, required: true},
    restaurentTable: {type: Number, required: true},
    openTime: {type: Number, required: true},
    closeTime: {type: Number, required: true},
    restaurentDescribe: {type: String, required: true},
    reviewImages: [{type: URL, required: true}],
    },
    {
    timestamps: true
    }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;