const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "swapi";
const planetsCollectionName = "planets";
const filmsCollectionName = "films";
const charactersCollectionName = "characters";
const filmsplanetsCollectionName = "filmsplanets";
const filmscharactersCollectionName = "filmscharacters";
let planetsCollection;
let filmsCollection;
let charactersCollection;
let filmsplanetsCollection;
let filmscharactersCollection;

async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  planetsCollection = db.collection(planetsCollectionName);
  filmsCollection = db.collection(filmsCollectionName);
  charactersCollection = db.collection(charactersCollectionName);
  filmsplanetsCollection = db.collection(filmsplanetsCollectionName);
  filmscharactersCollection = db.collection(filmscharactersCollectionName);
}
startup();

// retrieve all planets
module.exports.findAllPlanets = function (callback) {
  let dataPromise = planetsCollection.find({}).toArray();
  dataPromise.then((planets) => callback(planets));
};

// retrieve all films
module.exports.findAllFilms = function (callback) {
  let dataPromise = filmsCollection.find({}).toArray();
  dataPromise.then((films) => callback(films));
};

// retrieve all characters
module.exports.findAllCharacters = function (callback) {
  let dataPromise = charactersCollection.find({}).toArray();
  dataPromise.then((characters) => callback(characters));
};

// retrieve a single planet
module.exports.findPlanet = function (id, callback) {
  let dataPromise = planetsCollection.findOne({ id: +id });
  dataPromise.then((planet) => callback(planet));
};

// retrieve a single film
module.exports.findFilm = function (id, callback) {
  let dataPromise = filmsCollection.findOne({ id: +id });
  dataPromise.then((film) => callback(film));
};

// retrieve a single character
module.exports.findCharacter = function (id, callback) {
  let dataPromise = charactersCollection.findOne({ id: +id });
  dataPromise.then((character) => callback(character));
};

// retrieve All Characters from a single film
module.exports.findCharactersFromFilm = function (id, callback) {
  let dataPromise = filmscharactersCollection.find({ film_id: +id }).toArray();
  dataPromise.then((charactersOfFilm) => callback(charactersOfFilm));
};

// retrieve All Films from a single film character
module.exports.findFilmsofCharacter = function (id, callback) {
  let dataPromise = filmscharactersCollection
    .find({ character_id: +id })
    .toArray();
  dataPromise.then((filmsOfCharacters) => callback(filmsOfCharacters));
};

// retrieve all planets from a film
module.exports.findPlanetsFromFilm = function (id, callback) {
  let dataPromise = filmsplanetsCollection.find({ film_id: +id }).toArray();
  dataPromise.then((filmPlanet) => callback(filmPlanet));
};

// retrieve all films from a planet
module.exports.findFilmsFromPlanet = function (id, callback) {
  let dataPromise = filmsplanetsCollection.find({ planet_id: +id }).toArray();
  dataPromise.then((planetFilm) => callback(planetFilm));
};

// retrieve all characters from a planet
module.exports.findCharactersFromPlanet = function (id, callback) {
  let dataPromise = charactersCollection.find({ homeworld: +id }).toArray();
  dataPromise.then((planetChar) => callback(planetChar));
};
