function joinRoom(socket, room) {
	socket.join(room);
	currentRoom[socket.id] = room;
	socket.emit('joinResult', {room: room});
	socket.broadcast.to(room).emit('message', {
	text: nickname[socket.id] + ' has joined ' + room + '.'
	});
	var usersInRoom = io.sockets.clients(room);
	if (userInRoom.langth > 1) {
	
	}
	current
}