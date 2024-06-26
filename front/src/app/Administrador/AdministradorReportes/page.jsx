import React from 'react';
import Navbar from '@/components/Navbar/navbar';

export default function Page() {
  return (
    <>
      <header>
      <Navbar op1="Home" op2='Reportes' op3='Solicitudes' />
      </header>
      <div className="bg-gray-100  flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <div className="flex flex-wrap justify-center space-x-4 space-y-4 mb-8">
            <select
              className="bg-white text-black py-2 px-4 mt-4 font-sans rounded-lg shadow-md w-64 h-12"
            >
              <option value="" disabled selected>Seleccione una opción</option>
              <option value="1">Instructor</option>
              <option value="2">Aprendiz</option>
              <option value="3">Guardia de Seguridad</option>
              <option value="4">Personal</option>
              <option value="5">No pertenece a la Institución</option>
            </select>

            <input
              type="text"
              placeholder="Ingrese su número de documento"
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-64 h-12"
            />

            <select
              className="bg-white text-black py-2 px-4 font-sans rounded-lg shadow-md w-64 h-12"
            >
              <option value="" disabled selected>Seleccione una opción</option>
              <option value="1">Hoy</option>
              <option value="2">Semanal</option>
              <option value="3">Mensual</option>
              <option value="4">Trimestral</option>
              <option value="5">Anual</option>
            </select>

            <button
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-32 h-12 flex items-center justify-center"
            >
              Gráficas
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white mt-8">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-1/6 py-2 border-b text-center">Id</th>
              <th className="w-1/6 py-2 border-b text-center">Aprendiz</th>
              <th className="w-1/6 py-2 border-b text-center">Identificación</th>
              <th className="w-1/6 py-2 border-b text-center">Tiempo</th>
              <th className="w-1/6 py-2 border-b text-center">Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100">
              <td className="border px-4 py-2 text-center">1</td>
              <td className="border px-4 py-2 text-center">Juan Pérez</td>
              <td className="border px-4 py-2 text-center">12345678</td>
              <td className="border px-4 py-2 text-center">X</td>
              <td className="border px-4 py-2 text-center">--------------</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border px-4 py-2 text-center">2</td>
              <td className="border px-4 py-2 text-center">Ana García</td>
              <td className="border px-4 py-2 text-center">87654321</td>
              <td className="border px-4 py-2 text-center">✓</td>
              <td className="border px-4 py-2 text-center">08:30 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
