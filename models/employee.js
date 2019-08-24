'use strict';

let timestamps = require('mongoose-timestamp');
let mongoose = require('mongoose');
let schema = mongoose.Schema;

let employeeSchema = schema({
    name:String,
});

employeeSchema.virtual('meetings', {
    ref: 'Meeting',
    localField: '_id',
    foreignField: 'employees'
});

employeeSchema.plugin(timestamps);

module.exports = mongoose.model('Employee', employeeSchema);