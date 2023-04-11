const mongoose = require ('mongoose')
const staffSchema = new mongoose.Schema(
    {
    staffName: {type: String, required: true},
    staffSex: {type: String, required: true},
    accountStaff: {type: String, required: true},
    passwordStaff: {type: String, required: true},
    },
    {
    timestamps: true
    }
);

const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;