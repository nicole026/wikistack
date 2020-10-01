const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
// const main = require("./views/main");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

// Where your server and express app are being defined:
const { db, Page, User } = require("./models");

db.authenticate().then(() => {
  console.log("connected to the database");
});

const app = express();

app.use("/wiki", wikiRouter);

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

app.get("/", (req, res) => {
  console.log("hello world!");
  res.send(layout(""));
});

const init = async () => {
  await db.sync({ force: true });
  app.listen(3000, () => {
    console.log(`Server is listening on port 3000!`);
  });
};

init();
