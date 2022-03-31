const express = require("express");
const app = express();

const PORT = 4200;

app.use(express.json()); // for understanding json format

app.get("/", (req, res) => {
  //   res.send("Working!!!");
  res.status(200).json(req.query);
});

app.post("/", (req, res) => {
  res.status(200).json(req.body);
});

app.listen(PORT);
