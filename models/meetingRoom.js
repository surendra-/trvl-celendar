'use strict';

let timestamps = require('mongoose-timestamp');
let mongoose = require('mongoose');
let schema = mongoose.Schema;

let meetingRoomSchema = schema({
    name:String,
});


meetingRoomSchema.plugin(timestamps);

module.exports = mongoose.model('MeetingRoom', meetingRoomSchema);