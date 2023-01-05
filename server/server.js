const express = require('express');
const PORT = 4000;
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
let users = [];

app.use(cors());
const socketIO = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
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

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
