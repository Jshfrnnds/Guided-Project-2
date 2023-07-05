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

// // delete a single book
// module.exports.deleteBook = function (isbn, callback) {
//   let dataPromise = collection.deleteOne({ isbn: isbn });
//   dataPromise.then((ok) => callback(ok));
// };

// // update a single book
// module.exports.updateBook = function (isbn, book, callback) {
//   delete book._id;
//   let dataPromise = collection.updateOne(
//     { isbn: isbn },
//     { $set: book },
//     { upsert: true },
//     callback
//   );
//   dataPromise.then((ok) => callback(ok));
// };

// // add a single book
// app.post("/books", (req, res) => {
//   dao.addBook(req.body, (ok) => {
//     if (!ok) {
//       res.status(500).end();
//     } else {
//       res.end();
//     }
//   });
// });
