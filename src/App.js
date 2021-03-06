import React, { useState } from "react";

import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";

import MovieSource from "./api/movieSource";

function App() {
  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "c90eb7ff" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          React Search with Context API and Hooks
        </h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
}

export default App;