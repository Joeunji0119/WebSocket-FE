import { io } from 'socket.io-client';
const socket = io('ws://localhost:3001');

socket.on('connect', () => {
	console.log('connect');
});

socket.emit('은지', '클라이언트 준비됨');

socket.on('hi', data => {
	console.log(data);
});
