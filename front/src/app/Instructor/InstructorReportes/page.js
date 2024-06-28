"use client";

import Navbar from '@/components/NavBarInstructor/NavBarInstructor';
import { useEffect, useState } from 'react';

const getProgramas = async () => {
  try {
    const res = await fetch(
      "http://127.0.0.1:8000/senauthenticator/programa/",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Fallo la Busqueda de Posts");
    }

    return res.json();
  } catch (error) {
    console.log("Error al cargar posts: ", error);
    return [];
  }
};

export default function Instructor() {
  const [searchPrograma, setSearchPrograma] = useState('');
  const [searchFichas, setSearchFichas] = useState('');
  const [searchDocumentos, setSearchDocumentos] = useState('');
  const [searchTiempo, setSearchTiempo] = useState('');
  const [datos, setDatos] = useState([]);
  const [filteredDatos, setFilteredDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProgramas();
      setDatos(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchPrograma || searchFichas || searchDocumentos || searchTiempo) {
      const filtered = datos.filter(dato => 
        (searchPrograma ? dato.nombre_programa.toLowerCase().includes(searchPrograma.toLowerCase()) : true) &&
        (searchFichas ? dato.fichas?.toLowerCase().includes(searchFichas.toLowerCase()) : true) &&
        (searchDocumentos ? dato.documentos?.toLowerCase().includes(searchDocumentos.toLowerCase()) : true) &&
        (searchTiempo ? dato.tiempo?.toLowerCase().includes(searchTiempo.toLowerCase()) : true)
      );

      setFilteredDatos(filtered);
    } else {
      setFilteredDatos([]);
    }
  }, [searchPrograma, searchFichas, searchDocumentos, searchTiempo, datos]);

  const handleProgramaChange = (event) => {
    setSearchPrograma(event.target.value);
  };

  const handleFichasChange = (event) => {
    setSearchFichas(event.target.value);
  };

  const handleDocumentosChange = (event) => {
    setSearchDocumentos(event.target.value);
  };

  const handleTiempoChange = (event) => {
    setSearchTiempo(event.target.value);
  };

  const handleGraficasClick = () => {
    console.log('Gráficas clicked');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 w-full z-10">
        <Navbar op1="home" op2="reportes" op3="fichas" />
      </header>

      <div className="pt-16 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <section className="text-center mb-8">
            <h2 className="text-2xl font-bold p-4 shadow-lg bg-white rounded-lg">Reportes</h2>
          </section>

          <div className="flex flex-wrap justify-center space-x-4 space-y-4 mb-8">
            <input 
              type="text" 
              placeholder="Buscar Programa" 
              onChange={handleProgramaChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            <input 
              type="text" 
              placeholder="Buscar Fichas" 
              onChange={handleFichasChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            <input 
              type="text" 
              placeholder="Buscar Documentos" 
              onChange={handleDocumentosChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            <input 
              type="text" 
              placeholder="Buscar Tiempo" 
              onChange={handleTiempoChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            
            <button 
              onClick={handleGraficasClick} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            >
              Gráficas
            </button>
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
                {filteredDatos.length > 0 ? (
                  filteredDatos.map((dato) => (
                    <tr key={dato.id} className="even:bg-gray-100">
                      <td className="border px-4 py-2">{dato.id}</td>
                      <td className="border px-4 py-2">{dato.nombre_programa}</td>
                      <td className="border px-4 py-2">{dato.tipo_formacion_programa}</td>
                    </tr>
                  ))
                ) : (
                  datos.map((dato) => (
                  <tr>
                    <td className="border px-4 py-2">{dato.id}</td>
                    <td className="border px-4 py-2">{dato.nombre_programa}</td>
                    <td className="border px-4 py-2">{dato.tipo_formacion_programa}</td>
                  </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
