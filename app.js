const express = require("express");
// const morgan = require("morgan");
const layout = require("./views/layout");
const main = require("./views/main");

const app = express();

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  console.log("hello world!");
  res.send(layout(''));
});

app.listen(3000, () => {
  console.log(`App listening in port 3000`);
});
