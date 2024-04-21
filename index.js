const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const producer = require("./producer/producer");
const { consumer } = require("./consumer/consumer");

const app = express();
app.use(express.static("public"));
const server = http.createServer(app);

const io = socketIo(server);

server.listen(3000, () => {
  console.log("Server running on port 3000");
  publishMessages();
});

async function publishMessages() {
  io.on("connection", (socket) => {
    console.log("A client connected");

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
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
