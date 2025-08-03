import React from 'react';
import { Link } from 'react-router-dom';

const playlists = [
  {
    id: '1',
    name: 'Éxitos del Momento',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=200&h=200',
    description: 'Lo más escuchado hoy.'
  },
  {
    id: '2',
    name: 'Pop Hits',
    cover: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=200&h=200',
    description: 'Tus favoritos del pop internacional.'
  },
  {
    id: '3',
    name: 'Relax & Chill',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=200&h=200',
    description: 'Música para relajarte y desconectar.'
  },
  {
    id: '4',
    name: 'Workout',
    cover: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=200&h=200',
    description: 'Energía para tu entrenamiento.'
  }
];

const PlaylistGrid = () => (
  <div className="playlist-grid">
    {playlists.map((playlist) => (
      <Link to={`/playlist/${playlist.id}`} className="playlist-card" key={playlist.id}>
        <img src={playlist.cover} alt={playlist.name} className="playlist-cover" />
        <div className="playlist-info">
          <div className="playlist-title">{playlist.name}</div>
          <div className="playlist-desc">{playlist.description}</div>
        </div>
      </Link>
    ))}
  </div>
);

export default PlaylistGrid;
