const http = require("http");
const express = require("express");
const WebSocket = require("ws");
const path = require("path");

const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("static", "chat.html"));
});

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on("connection", (ws) => {
  ws.on("message", (m) => {
    const userM = m.toString();
    console.log(userM);
    webSocketServer.clients.forEach((client) => client.send(userM));
  });

  ws.on("error", (e) => ws.send(e));

  ws.send(
    JSON.stringify({ user: "server", message: "Успешное подключение к чату" })
  );
});

server.listen(80, () => console.log("Server started http://127.0.0.1"));
