'use strict';

 let controller = require('./handler');
 let joi = require('joi');
 
exports.register = function (server, options, next) {
	
	server.route([
		{
		    method: 'GET',								
		    path: '/api/v1/employees',
		    config:{
		    	tags: ['api'],
		    },
		    handler: controller.findAllEmployees
		},
		{
		    method: 'POST',								
		    path: '/api/v1/add-employee',
		    config:{
		    	tags: ['api'],
		    },
		    handler: controller.addEmployee
		},
		{
		    method: 'POST',								
		    path: '/api/v1/create-meeting',
		    config:{
		    	tags: ['api']
		    },
		    handler: controller.createMeeting
		},
		{
		    method: 'GET',								
		    path: '/api/v1/employee-meetings/{empId}',
		    config:{
		    	tags: ['api'],
		    },
		    handler: controller.meetingsByEmployee
		},
		{
		    method: 'POST',								
		    path: '/api/v1/add-meeting-room',
		    config:{
		    	tags: ['api'],
		    },
		    handler: controller.addMeetingRoom
		},
		{
		    method: 'PUT',								
		    path: '/api/v1/meetings/{id}',
		    config:{
		    	tags: ['api'],
		    },
		    handler: controller.updateMeeting
		},
		{
		    method: 'GET',								
		    path: '/api/v1/meetings',
		    config:{
		    	tags: ['api'],
		    },
		    handler: controller.getAllMeetings
		},
	]);
    next();
};

exports.register.attributes = {
    pkg:{"name": "calendar",
        "version": "0.0.1",
        "description": "calendar api ",
        "main": "index.js"
       }
};




