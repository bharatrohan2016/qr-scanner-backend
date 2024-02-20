const mongoose = require('mongoose');
const QRFarmerSchema = mongoose.Schema({
    farmername : {
        type : String,
    },
    mobilenumber : {
        type : String
    },
    fathername : {
        type : String,
    },
    block : {
        type : String,
    },
    crop : {
        type : String,
    },
    state : {
        type : String,
    },
    district : {
        type : String,
    },
    tehsil : {
        type : String,
    },
    village : {
        type : String,
    },
    pincode : {
        type : String,
    },
    unitarea : {
        type : String,
    },
    aadharnumber : {
        type : String,
    },
    batchnumber : {
        type: String
    }
},{
    timestamps: true
});

const qrfarmer = mongoose.model('qrfarmer', QRFarmerSchema);
module.exports = qrfarmer;