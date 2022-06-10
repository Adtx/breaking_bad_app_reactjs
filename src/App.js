import React, { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar";
import CharacterGrid from "./components/CharacterGrid";
import Header from './components/Header';

function App() {
  const endpoint = 'https://www.breakingbadapi.com/api/characters/';

  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchCharacters() {
      const urlQueryString = searchTerm ? '?name=' + encodeURIComponent(searchTerm) : searchTerm;
      const res = await fetch(endpoint + urlQueryString);
      const characters = await res.json();
      if(characters !== []) setCharacters(characters);
      setIsLoading(false)
    };
    setTimeout(() => {
      fetchCharacters();
    },  3000)
  }, [searchTerm]);
      

  return (
    <div className="App">
      <Header />
      <SearchBar searchTerm={searchTerm} updateURIQuery={setSearchTerm} />
      <CharacterGrid isLoading={isLoading} items={characters} />
    </div>
  );
}

export default App;
