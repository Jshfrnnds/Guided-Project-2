var express = require("express");
// var dao = require("./mongo-dao");
var app = express();

app.use(express.json()); //Parse JSON body

// index.js GET AllPlanets
app.get("/api/planets", (req, res) => {
  res.send({ Planet: "Test" });
});

// server start-up
const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);
