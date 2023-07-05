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

// // retrieve a single book
// module.exports.findBook = function (isbn, callback) {
//   let dataPromise = collection.findOne({ isbn: isbn });
//   dataPromise.then((book) => callback(book));
// };

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
