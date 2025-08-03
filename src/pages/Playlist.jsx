import React from 'react';
import { useParams } from 'react-router-dom';

const Playlist = () => {
  const { id } = useParams();
  return (
    <div className="page playlist">
      <h1>Playlist</h1>
      <p>Mostrando información de la playlist con ID: {id}</p>
    </div>
  );
};

export default Playlist;
