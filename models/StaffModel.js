const mongoose = require ('mongoose')
const staffSchema = new mongoose.Schema(
    {
    staffID: {type: Number, required: true,unique: true},
    restaurentID: {type: Number, required: true, unique: true},
    staffName: {type: String, required: true},
    staffSex: {type: String, required: true},
    accountName: {type: String, required: true},
    accountPassword: {type: String, required: true},
    },
    {
    timestamps: true
    }
);

const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;