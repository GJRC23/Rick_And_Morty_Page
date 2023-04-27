import './Nav.css'
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, addRandomCharacter, setAccess }) => {
  
  const handleLogOut = () => {
    setAccess(false);
  }
  
  return (
    <nav>
      <button id='logOut' onClick={handleLogOut}>Log Out</button>

      <h1 id="titleNav">Rick and Morty Characters</h1>

      <button className='agregarBtn' onClick={addRandomCharacter}>
        Agregar personaje aleatorio
      </button>

      <button className='agregarBtn'>
        <Link to='/favorites'> Favorites </Link>
      </button>

      <button className='agregarBtn'>
        <Link to = '/about'>About</Link>
      </button>

      <button className='agregarBtn'>
        <Link to = '/home'>Home</Link>
      </button>
      
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
}

export default Nav;