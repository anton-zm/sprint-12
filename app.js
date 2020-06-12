const express = require("express");
const path = require("path");
const cardsArr = require("./routes/cards");
const usersArr = require("./routes/users");

const { PORT = 3000 } = process.env;

const app = express();

const urlNotFound = (req, res) => {
  if (!res.headersSent) {
    res.status(404).send({
      message: "Запрашиваемый ресурс не найден",
    });
  }
};

app.use(express.static(path.join(__dirname, "public")));
app.use("/cards", cardsArr);
app.use("/users", usersArr);
app.use(urlNotFound);
app.listen(PORT);
