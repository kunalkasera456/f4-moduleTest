// GenreFilter.js
import React from 'react';

function GenreFilter({ genres }) {
  const handleGenreClick = (genre) => {
    console.log(`Selected genre: ${genre}`);
  };

  return (
    <div>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => handleGenreClick(genre)}>{genre}</button>
      ))}
    </div>
  );
}

export default GenreFilter;
