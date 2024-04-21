const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const producer = require("./producer/producer");
const { consumer } = require("./consumer/consumer");

const app = express();
app.use(express.static("public"));
const server = http.createServer(app);

const io = socketIo(server);

async function runSocketServer() {
  io.on("connection", (socket) => {
    console.log("A client connected");

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });

    // Handle custom events from the client
    // socket.on("weatherData", (message) => {
    //   console.log("Message received:", message);
    //   // Broadcast the message to all connected clients
    //   io.emit("chat message", data);
    // });
  });
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic" });
  await consumer.run({
    eachMessage: async ({ partition, message }) => {
      io.emit("weatherData", message.value.toString());
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
}

runSocketServer();
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
