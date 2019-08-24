'use strict';

let timestamps = require('mongoose-timestamp');
let mongoose = require('mongoose');
let schema = mongoose.Schema;

let meetingSchema = schema({
    name:String,
    employees:[{ type: schema.Types.ObjectId, ref:'Employee'}],
    meetingRoom:{ type: schema.Types.ObjectId, ref:'MeetingRoom'},
});


meetingSchema.plugin(timestamps);

module.exports = mongoose.model('Meeting', meetingSchema);


