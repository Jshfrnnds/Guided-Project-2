import "./App.css";
import { getCharacters } from "./rest";
import React, { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    let promise = getCharacters();
    promise.then((text) => {
      let characterArray = JSON.parse(text);
      setCharacters(characterArray);
    });
  }, []);

  return (
    <div className="App">
      <h3>List of Characters</h3>
      {characters}
    </div>
  );
}

export default App;
