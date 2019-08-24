'use strict';

let funcs = {};
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
let Meeting = require('../../models/meeting');
let Employee = require('../../models/employee');
let MeetingRoom = require('../../models/meetingRoom');

funcs.addEmployee = (request, reply)=>{
    let emp = new Employee();
    emp.name = request.payload.name;
    emp.save(function(err,em){
        if(err) return reply({status:false, message:err});
        return reply({status:true, message:'Employee is added', data: em});
    })
};

funcs.createMeeting = (request, reply)=>{
    let meeting = new Meeting();
    meeting.name = request.payload.name;
    meeting.employees = request.payload.employees;
    meeting.save(function(err,meet){
        if(err) return reply({status:false, message:err});
        return reply({status:true, message:'Meeting is created', data: meet});
    })
};

funcs.findAllEmployees = (request, reply)=>{
    Employee.find((err, res)=>{
        if(err) return reply({status:false, message:err});
        return reply({status:true, data:res});
    })
};

funcs.meetingsByEmployee = (request, reply) =>{
    const empId = request.params.empId;
    Meeting.find({'employees': ObjectId(empId)}).populate('employees').exec((err, res)=>{
        if(err) return reply({status:false, message:err});
        return reply({status:true, data:res});
    })
}

funcs.addMeetingRoom  = (request, reply) =>{
     let room = new MeetingRoom();
     room.name = request.payload.name;
     room.save(function(err,meet){
        if(err) return reply({status:false, message:err});
        return reply({status:true, message:'Meeting room is created', data: meet});
    })
}

funcs.updateMeeting = (request, reply)=>{
    const meetingId = request.params.id;
    Meeting.update({_id: ObjectId(meetingId)}, {meetingRoom: request.payload}, (err, res)=>{
        if(err) return reply({status:false, message:err});
        return reply({status:true, data:res});
    })
}

module.exports = funcs;



/***
 * 
 * meetingrooms : room1, room2;
 * employees: emp1, emp2, emp3, emp4;
 * 
 * meetings: 
 * 
 * meeting1 : emp1, emp2, emp3, | 10AM - 12 PM | room1 ;
 * meeting2 : emp2, emp4 | 11AM - 1 PM | 
 * meeting3 : emp2, emp3, emp4 | 
 * 
 */