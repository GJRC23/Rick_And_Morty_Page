import SearchBar from './SearchBar';

function Nav({ onSearch, addRandomCharacter }) {
  return (
    <nav>
      <h1 id="titleNav">Rick and Morty Characters</h1>
      <SearchBar onSearch={onSearch}/>
      <button className='agregarBtn' onClick={addRandomCharacter}>Agregar personaje aleatorio</button>
    </nav>
  );
}

export default Nav;