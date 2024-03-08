const socket = io('http://localhost:3000');

socket.emit('newMessages', { msg: 'Namaste World' });

socket.emit('join-room', { room: 1, username: 'kapil' });
