import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

    const handleChange = (event) => {
      setId(event.target.value);
    };

   return (
      <div class='searchBar'>
         <input id='searchInput' type='search' placeholder='Search by ID' onChange={handleChange} value={id} />
         <button className='agregarBtn' onClick={() => {onSearch(id); setId('')}}>Add character</button>
      </div>
   );
}