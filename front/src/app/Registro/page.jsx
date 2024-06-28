// src/components/RegistroFormulario.js
"use client";  // Marca este componente como un "Client Component"

import React from 'react';

export default function page() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Nombre:</label>
          <input type="text" name="nombre_usuario" className="w-full border border-gray-300 px-3 py-2 rounded-md" required />
        </div>
        <div>
          <label className="block mb-1">Apellidos:</label>
          <input type="text" name="apellidos_usuario" className="w-full border border-gray-300 px-3 py-2 rounded-md" required />
        </div>
        <div>
          <label className="block mb-1">Género:</label>
          <select name="genero_usuario" className="w-full border border-gray-300 px-3 py-2 rounded-md" required>
            <option value="">Seleccione</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Correo Institucional:</label>
          <input type="email" name="correo_institucional_usuario" className="w-full border border-gray-300 px-3 py-2 rounded-md" required />
        </div>
        <div>
          <label className="block mb-1">Correo Personal:</label>
          <input type="email" name="correo_personal_usuario" className="w-full border border-gray-300 px-3 py-2 rounded-md" required />
        </div>
        <div>
          <label className="block mb-1">Contraseña:</label>
          <input type="password" name="contrasenia_usuario" className="w-full border border-gray-300 px-3 py-2 rounded-md" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Registrarse</button>
      </form>
    </div>
  );
}
