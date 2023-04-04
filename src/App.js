import './App.css';
import './components/Nav.css'
import { useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);
  const [usedIds, setUsedIds] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
    });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(character => character.id !== Number(id));
    setCharacters(charactersFiltered);
  };

  return (
    <div className='App'>
        <Nav onSearch={onSearch} addRandomCharacter={() => {
        const id = Math.floor(Math.random() * 826) + 1;
        if (!usedIds.includes(id) && !characters.some(character => character.id === id)) {
          axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.data)
            .then(data => {
              setCharacters([...characters, data]);
              setUsedIds([...usedIds, id]);
            });
        }
      }}/>
        <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
