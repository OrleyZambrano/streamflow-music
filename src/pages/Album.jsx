import React from 'react';
import { useParams } from 'react-router-dom';

const Album = () => {
  const { id } = useParams();
  return (
    <div className="page album">
      <h1>Álbum</h1>
      <p>Mostrando información del álbum con ID: {id}</p>
    </div>
  );
};

export default Album;
