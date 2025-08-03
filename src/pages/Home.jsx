import React from 'react';
import PlaylistGrid from '../components/PlaylistGrid';
import '../components/PlaylistGrid.css';

const Home = () => (
  <div className="page home">
    <h1>StreamFlow Music</h1>
    <p>Bienvenido a la experiencia musical definitiva.</p>
    <h2 style={{marginTop: '2rem', color: '#fff'}}>Playlists populares</h2>
    <PlaylistGrid />
  </div>
);

export default Home;
