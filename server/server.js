if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
const express = require('express');
const PORT = 4000;
const http = require('http');
const app = express();
const cors = require('cors');
app.use(cors());
const server = http.createServer(app);
let users = [];

const socketIO = require('socket.io')(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
  });
  //Add user to the list
  socket.on('newUser', (data) => {
    users.push(data);
    socketIO.emit('newUserResponse', users);
  });
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates the list of users
    users = users.filter((user) => user.socketID !== socket.id);
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
