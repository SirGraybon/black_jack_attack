const Websocket = require("ws");
const server = new Websocket.server({ port: "8080" });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.send(`hello hello ${message}`);
  });
});
