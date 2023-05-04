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

      <img className="titleImg" src='https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png' alt='' />

      <button className='agregarBtn' onClick={addRandomCharacter}>
        Add Random Character
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