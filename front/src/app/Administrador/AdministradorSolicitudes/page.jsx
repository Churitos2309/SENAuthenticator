// import React from 'react';
// import Navbar from '@/components/Navbar/navbar';

// const getCategories = async () => {
//   try {
//     const res = await fetch("https://rickandmortyapi.com/api/character", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Fallo la Busqueda de Posts");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error al cargar posts: ", error);
//   }
// };

// export default async function Page() {
//   const datos = await getCategories();
//   const datos2 = datos.results;
//   console.log(datos2);
//   return (
//     <div>
//       <header>
//         <Navbar op1="Home" op2="Reportes" op3="Solicitudes" />
//       </header>
//       <div>
//         {datos2.map(dato => (
//           <div key={dato.id}>
//             <img src={dato.image} alt="" />
//             <h1>{dato.name}</h1>
//             <h1>{dato.status}</h1>
//             <h1>{dato.species}</h1>
//             <h1>{dato.type}</h1>
//             <h1>{dato.gender}</h1>
//             {/* <h1>{dato.episode}</h1> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client"; 
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar/navbar';

const getCategories = async (searchTerm) => {
  try {
const res = await fetch(`http://127.0.0.1:8000/senauthenticator/programa/?search=${searchTerm}`, {
  cache: "no-store",
});


    if (!res.ok) {
      throw new Error("Fallo la búsqueda de programas");
    }

    return res.json();
  } catch (error) {
    console.log("Error al cargar programas: ", error);
    return [];
  }
};

export default function Page() {
  const [datos, setDatos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories(searchTerm);
      setDatos(data);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <header>
        <Navbar op1="Home" op2="Reportes" op3="Solicitudes" />
      </header>
      <div className="container mx-auto py-8">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded"
          />
        </div>
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-1/6 py-2 border-b">Id</th>
                <th className="w-1/6 py-2 border-b">Nombre del Programa</th>
                <th className="w-1/6 py-2 border-b">Tipo de Formación</th>
              </tr>
            </thead>
            <tbody>
              {datos.length > 0 ? (
                datos.map((dato) => (
                  <tr key={dato.id} className="even:bg-gray-100">
                    <td className="border px-4 py-2">{dato.id}</td>
                    <td className="border px-4 py-2">{dato.nombre_programa}</td>
                    <td className="border px-4 py-2">{dato.tipo_formacion_programa}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4">No hay datos disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


