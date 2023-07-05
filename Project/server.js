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

// index.js GET All Films
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

// server.js get ONE Film
app.get("/api/films/:id", (req, res) => {
  dao.findFilm(req.params.id, (film) => {
    if (!film) {
      res.status(404).end();
    } else {
      res.send(film);

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


// server.js get ONE Character
app.get("/api/characters/:id", (req, res) => {
  dao.findCharacter(req.params.id, (character) => {
    if (!character) {
      res.status(404).end();
    } else {
      res.send(character);
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

// server.js get All Characters in ONE Film
app.get("/api/films/:id/characters", (req, res) => {
  dao.findCharactersFromFilm(req.params.id, (charactersOfFilm) => {
    if (!charactersOfFilm) {
      res.status(404).end();
    } else {
      res.send(charactersOfFilm);
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

// server.js get All Films of ONE Character
app.get("/api/characters/:id/films", (req, res) => {
  dao.findFilmsofCharacter(req.params.id, (filmsOfCharacters) => {
    if (!filmsOfCharacters) {
      res.status(404).end();
    } else {
      res.send(filmsOfCharacters);
    }
  });
});

// server start-up
const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);
