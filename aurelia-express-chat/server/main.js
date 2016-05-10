var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);

var messages = [];

app.use(express.static('client'));

server.listen(8080, function() {  
	console.log('Server started http://localhost:8080');
});

io.on('connection', function(socket) {  
	console.log('New client connected');
	socket.emit('messages', messages);

	socket.on('new-message', function(data) {
		messages.push(data);
		io.sockets.emit('messages', messages);
	});
});