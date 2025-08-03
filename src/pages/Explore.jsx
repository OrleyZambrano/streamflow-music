import React from 'react';
import PlaylistGrid from '../components/PlaylistGrid';
import '../components/PlaylistGrid.css';

const Explore = () => (
  <div className="page explore">
    <h1>Explorar</h1>
    <p>Descubre nueva música, playlists y artistas.</p>
    <h2 style={{marginTop: '2rem', color: '#fff'}}>Playlists sugeridas</h2>
    <PlaylistGrid />
  </div>
);

export default Explore;
