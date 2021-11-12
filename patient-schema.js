// contains the schema that describes my collection 

const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    // fields of schema in an object
    pid: {type: Number , required: true},
    name: {type: String, required: true},
    Address: {type: String, required: true},
    phone: {type: Number, required: true},
    speciallty: {type: String, required: true},
    department: {type: String, required: true},
    dob: {type: String, required: true}
    
});

// name of model that is the name of my collection (1st para)
// whats the schema that i want to add that describes the fields (2nd para)
module.exports = mongoose.model('patient', patientSchema );

