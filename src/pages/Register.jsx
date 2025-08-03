import React from 'react';

const Register = () => (
  <div className="page register">
    <h1>Registrarse</h1>
    <form>
      <input type="text" placeholder="Nombre de usuario" required />
      <input type="email" placeholder="Correo electrónico" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Crear cuenta</button>
    </form>
  </div>
);

export default Register;
