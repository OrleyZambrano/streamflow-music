import React from 'react';
import { useParams } from 'react-router-dom';

const Artist = () => {
  const { id } = useParams();
  return (
    <div className="page artist">
      <h1>Artista</h1>
      <p>Mostrando información del artista con ID: {id}</p>
    </div>
  );
};

export default Artist;
