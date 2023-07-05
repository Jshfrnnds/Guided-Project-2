var express = require("express");
var dao = require("./mongo-dao");
var app = express();

app.use(express.json()); //Parse JSON body

// index.js GET AllPlanets
app.get("/api/planets", (req, res) => {
  dao.findAllPlanets((planets) => {
    if (!planets) {
      res.status(404).end();
    } else {
      res.send(planets);
    }
  });
});

// index.js GET AllFlims
app.get("/api/films", (req, res) => {
  dao.findAllFilms((films) => {
    if (!films) {
      res.status(404).end();
    } else {
      res.send(films);
    }
  });
});

// index.js GET AllCharacters
app.get("/api/characters", (req, res) => {
  dao.findAllCharacters((characters) => {
    if (!characters) {
      res.status(404).end();
    } else {
      res.send(characters);
    }
  });
});

// index.js GET One Planet
app.get("/api/planets/:id", (req, res) => {
  dao.findPlanet(req.params.id, (planet) => {
    if (!planet) {
      res.status(404).end();
    } else {
      res.send(planet);
    }
  });
});

// index.js GET One Character
app.get("/api/characters/:id", (req, res) => {
  dao.findCharacter(req.params.id, (character) => {
    if (!character) {
      res.status(404).end();
    } else {
      res.send(character);
    }
  });
});

// index.js GET One Film
app.get("/api/films/:id", (req, res) => {
  dao.findFilm(req.params.id, (film) => {
    if (!film) {
      res.status(404).end();
    } else {
      res.send(film);
    }
  });
});

// index.js GET all planets from a film
app.get("/api/films/:id/planets", (req, res) => {
  dao.findPlanetsFromFilm(req.params.id, (filmPlanet) => {
    if (!filmPlanet) {
      res.status(404).end();
    } else {
      res.send(filmPlanet);
    }
  });
});

// index.js GET all films from a planet
app.get("/api/planets/:id/films", (req, res) => {
  dao.findFilmsFromPlanet(req.params.id, (planetFilm) => {
    if (!planetFilm) {
      res.status(404).end();
    } else {
      res.send(planetFilm);
    }
  });
});

// index.js GET all characters from a planet
app.get("/api/planets/:id/characters", (req, res) => {
  dao.findCharactersFromPlanet(req.params.id, (planetChar) => {
    if (!planetChar) {
      res.status(404).end();
    } else {
      res.send(planetChar);
    }
  });
});

// server start-up
const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);
