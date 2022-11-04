const express = require("express");

const app = new express();

const PORT = 80;

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- форма сообщений -->
  <form name="publish">
    <input type="text" name="message">
    <input type="submit" value="Отправить">
  </form>

  <!-- div с сообщениями -->
  <div id="messages"></div>
</body>
</html>
`);
});

app.listen(PORT, () => {
  console.log(`start http://127.0.0.1`);
});
