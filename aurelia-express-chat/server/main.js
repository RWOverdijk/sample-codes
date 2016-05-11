var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);


var messages = [];
var users = [];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.end(JSON.stringify(req.body))
  next();
});
app.use(express.static('client'));

app.get('/getUserName', function(req, res) {
	console.log('getUserName');
	res.send({'name': 'guest1'})
});

server.listen(8080, function() {  
	console.log('Server started http://localhost:8080');
});

io.on('connection', function(socket) {  
	console.log('New client connected');
	socket.emit('messages', messages);

	socket.on('new-message', function(data) {
		console.log('Message recieved');
		messages.push(data);
		io.sockets.emit('messages', messages);
	});
});