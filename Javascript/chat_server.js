function assignGuestName(socket , guestNumber, nickNames, namesUsed)
var name = 'Guest' + guestNumber;
socket.emit('nameResult', {
	success: true, 
	name: name
});
namesUsed.push(name);
return guestNumber + 1;
)