import http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('WebSocket server is running');
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket: any) => {
  console.log('From server: ws connected')
  console.log(socket)
});

export default server;








