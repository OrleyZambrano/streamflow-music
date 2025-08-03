import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">StreamFlow Music</Link>
    </div>
    <ul className="navbar-links">
      <li><Link to="/explore">Explorar</Link></li>
      <li><Link to="/library">Biblioteca</Link></li>
      <li><Link to="/profile">Perfil</Link></li>
      <li><Link to="/login">Entrar</Link></li>
      <li><Link to="/register">Registro</Link></li>
    </ul>
  </nav>
);

export default Navbar;
