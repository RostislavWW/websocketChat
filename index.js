const http = require("http");
const express = require("express");
const WebSocket = require("ws");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("static", "chat.html"));
});

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on("connection", (ws) => {
  ws.on("message", (m) => {
    const userM = m.toString();
    webSocketServer.clients.forEach((client) => client.send(userM));
  });

  ws.on("error", (e) => ws.send(e));

  ws.send(
    JSON.stringify({ user: "server", message: "Успешное подключение к чату" })
  );
});

server.listen(80, () => console.log("Server started http://127.0.0.1"));

// const http = require("http");
// const ws = new require("ws");
// const wss = new ws.Server({ noServer: true });

// const clients = new Set();
// console.log("create WS Server run");
// http.createServer((req, res) => {
//   console.log("create WS Server");
//   // в реальном проекте здесь может также быть код для обработки отличных от websoсket-запросов
//   // здесь мы работаем с каждым запросом как с веб-сокетом
//   wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
// });

// function onSocketConnect(ws) {
//   clients.add(ws);

//   ws.on("message", function (message) {
//     message = message.slice(0, 50); // максимальный размер сообщения 50

//     for (let client of clients) {
//       client.send(message);
//     }
//   });

//   ws.on("close", function () {
//     clients.delete(ws);
//   });
// }

// // Подключаем http сервер
// const http = require('http')
// // Подключаем вебсокет сервер
// const ws = require('ws')

// //
// const wss = new ws.Server({noServer: true});

// function accept(req, res) {
//   // все входящие запросы должны использовать websockets
//   if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
//     res.end();
//     return;
//   }

//   // может быть заголовок Connection: keep-alive, Upgrade
//   if (!req.headers.connection.match(/\bupgrade\b/i)) {
//     res.end();
//     return;
//   }

//   wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
// }

// function onConnect(ws) {
//   ws.on('message', function (message) {
//     let name = message.match(/([\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+)$/gu) || "Гость";
//     ws.send(`Привет с сервера, ${name}!`);

//     setTimeout(() => ws.close(1000, "Пока!"), 5000);
//   });
// }

// if (!module.parent) {
//   http.createServer(accept).listen(8080);
//   console.log('server started port 8080')
// } else {
//   exports.accept = accept;
// }
