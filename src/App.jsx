
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Library from './pages/Library';
import Profile from './pages/Profile';
import Album from './pages/Album';
import Artist from './pages/Artist';
import Playlist from './pages/Playlist';
import Login from './pages/Login';
import Register from './pages/Register';

import Navbar from './components/Navbar';
import Player from './components/Player';
import './components/Navbar.css';
import './components/Player.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingBottom: '100px', minHeight: '100vh', background: 'linear-gradient(135deg, #7b2ff2 0%, #f357a8 100%)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Player />
    </Router>
  );
}

export default App;
