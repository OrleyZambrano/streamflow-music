import React from 'react';

const Login = () => (
  <div className="page login">
    <h1>Iniciar Sesión</h1>
    <form>
      <input type="email" placeholder="Correo electrónico" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
);

export default Login;
