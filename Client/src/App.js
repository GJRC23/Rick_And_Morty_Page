//Css
import './App.css';
//React
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
//Jsx
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form'

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'ee5cc2e16969.6f7908ce64e58ade4e29';

// const email = 'gastuconsoli8@gmail.com';
// const password = '123abc';
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [usedIds, setUsedIds] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;

      setAccess(access);
      access && navigate('/home');

    } catch (error) {
        console.log(error.message);
    }
  }    
   
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate])

  const onSearch = async (id) => {
    try {

      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      };

    } catch (error) {
      alert('¡No hay personajes con este ID!');
    }
    
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(character => character.id !== id);
    setCharacters(charactersFiltered);
    localStorage.setItem('characters', JSON.stringify(charactersFiltered));
  };

  return (
    <div className='App'>
      {
        location.pathname !== '/' && <Nav onSearch={onSearch} addRandomCharacter={() => {
          const id = Math.floor(Math.random() * 826) + 1;
          if (!usedIds.includes(id) && !characters.some(character => character.id === id)) {
            axios(`http://localhost:3001/rickandmorty/character/${id}`)
              .then(response => response.data)
              .then(data => {
                setCharacters([...characters, data]);
                setUsedIds([...usedIds, id]);
              });
            }
          }} setAccess={setAccess}/>   
      }
      
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} showButton={true} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
  );
}

export default App;