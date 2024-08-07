import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InicioIntructor = () => {
  return (
    <>
      <div>
        <div className="mt-0">
          <Navbar
            item1="inicio"
            item2="Reportes"
            item3=""
            ruta1=""
            ruta2=""
            ruta3=""
            color="activo"
          />
        </div>

        {/* <div className="absolute container">
          <table class="mt-48 mx-auto table-auto w-full max-w-6xl">
            <thead class="bg-gray-800 text-gray-300">
              <tr>
                <th class="px-4 py-2 w-1/6 text-left">Puesto</th>
                <th class="px-4 py-2 w-1/6 text-left">Nombre</th>
                <th class="px-4 py-2 w-1/6 text-left">Número Identificación</th>
                <th class="px-4 py-2 w-1/6 text-left">Ingreso</th>
                <th class="px-4 py-2 w-1/6 text-left">Hora de Ingreso</th>
                <th class="px-4 py-2 w-1/6 text-left">Status</th>
              </tr>
            </thead>
            <tbody class="bg-gray-200">
              <tr class="bg-white border-b border-gray-200">
                <td class="px-4 py-2 flex items-center">
                  <img
                    class="h-8 w-8 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/men/30.jpg"
                    alt="Profile Picture"
                  />
                </td>
                <td class="px-4 py-2 text-left font-semibold">Dean Lynch</td>
                <td class="px-4 py-2 text-center">
                  <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black">
                    Open Link
                  </button>
                </td>
                <td class="px-4 py-2 text-center">05/06/2020</td>
                <td class="px-4 py-2 text-center">10:00</td>
                <td class="px-4 py-2 text-center text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default InicioIntructor;
