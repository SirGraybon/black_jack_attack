const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const httpServer = http.createServer(app);
const users = [];

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
  users: users
});

io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);

socket.on("send_message", (data)=> {
  console.log(data.message)

})

socket.on("updateServerState", (updatedState) => {
  socket.emit("updateClientState", updatedState)
})

});

httpServer.listen(8080, () => {
  console.log("server running");
});
