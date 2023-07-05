import "./App.css";
import { getCharacters, getCharacter } from "./rest";
import React, { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    let promise = getCharacters();
    promise.then((characterArray) => {
      setCharacters(characterArray);
    });
  }, []);

  return (
    <div className="App">
      <h3>List of Characters</h3>
      {characters.map((character) => {
        return <div>{character.name}</div>;
      })}
    </div>
  );
}

export default App;
