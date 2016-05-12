var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);

// Configuration

app.use(express.static('client'));

server.listen(8080, function() {  
	console.log('Server started http://localhost:8080');
});

// Data

var messages = [];
var users = [];

// Websockets

io.on('connection', function(socket) {  
	console.log('New client connected');
	socket.emit('messages', messages);

	socket.on('get-nick-name', function(data) {
		console.log('get-user-name');
		var nickname = 'guest' + (users.length + 1);
		users.push({
			id: (users.length + 1),
			nickName : nickname,
			firstName : '',
			lastName : '',
			description : ''
		})
		console.log(`emit recieve-nick-name ${nickname} id ${users.length}`);
		console.log(users);
		socket.emit('recieve-nick-name', {
			id: (users.length),
			name: nickname
		});
	});

	socket.on('update-user', function(data) {
		console.log(`update-user ${data.nickName}`);
		users.map(function (arrayItem) {
			if(arrayItem.id == data.id) {
				arrayItem.nickName = data.nickName;
				arrayItem.firstName = data.firstName;
				arrayItem.lastName = data.lastName;
				arrayItem.description = data.description;
			}
		})
		console.log(users);
	});

	socket.on('get-user-info', function(data) {
		console.log(`get-user-info ${data}`);
		var user;
		for (var i = users.length - 1; i >= 0; i--) {
			if(users[i].nickName == data) {
				user = users[i];
				break;
			}
		};
		var userinfo;
		try {
			var userinfo = {
				nickName : user.nickName,
				firstName : user.firstName,
				lastName : user.lastName,
				description : user.description
			};
		}
		catch(err) {
			userinfo = 'not finded';
		}
		socket.emit('recieve-user-info', userinfo);
	});

	socket.on('new-message', function(data) {
		console.log(`new-message from ${data.nickName}`);
		messages.push(data);
		io.sockets.emit('messages', messages);
	});
});