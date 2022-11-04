const express = require("express");

const app = new express();

const PORT = 80;

app.listen(PORT, () => {
  console.log(`start http://127.0.0.1`);
});
