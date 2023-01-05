const express = require('express');
const PORT = 4000;
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors');

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
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
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
