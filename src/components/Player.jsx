import React from 'react';
import './Player.css';

const Player = () => (
  <div className="player">
    <div className="player-song-info">
      <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=80&h=80" alt="cover" className="player-cover" />
      <div>
        <div className="player-title">Nombre de la canción</div>
        <div className="player-artist">Artista</div>
      </div>
    </div>
    <div className="player-controls">
      <button className="player-btn">⏮️</button>
      <button className="player-btn">▶️</button>
      <button className="player-btn">⏭️</button>
    </div>
    <div className="player-progress">
      <span>1:12</span>
      <input type="range" min="0" max="100" value="30" readOnly />
      <span>3:45</span>
    </div>
  </div>
);

export default Player;
