'use client'
import React from "react";
import "../style.css";
import logoSENA from "../../../../public/assets/logo-sena-naranja-png-2022.png";
import fotoPerfil from "../../../../public/assets/istockphoto-913062404-612x612.jpg";
import Image from "next/image";

const CarnetAprendiz = () => {
  return (
    <div>
      <div className="border-2 border-black  mt-2  bg-slate-50 h-auto shadow-xl">
        <div className="flex mt-6 ml-10">
          <div>
            {/* <img src={logoSENA} alt="Logo SENA" className="w-20" /> */}

            <Image src={logoSENA} className="w-20" alt="Logo SENA" />
          </div>

          {/* <img
            src={fotoPerfil}
            alt="Foto"
            className="w-28 ml-7 border border-black"
          /> */}

          <Image src={fotoPerfil} className="w-28 ml-7 border border-black" alt="Foto" />

          <div>
            <p className="apre z-0">Aprendiz</p>
          </div>
        </div>
        <div className="w-72 ml-4 h-1 mt-1 bg-orange-500"></div>
        <p className="text-xl flex mt-3">
          <p className="text-lg mr-2 ml-4 text-orange-500">Nombres: </p>Samuel
          Felipe
        </p>
        <p className="text-xl flex ">
          <p className="text-lg mr-2 ml-4 text-orange-500">Apellidos: </p>
          Carvajal Gómez
        </p>
        <p className="text-xl flex mt-2">
          <p className="text-lg mr-2 ml-4 text-orange-500">Cc : </p>
          1.061.367.623
        </p>
        <p className="text-xl flex mt-2">
          <p className="text-lg mr-2 ml-4 text-orange-500">RH: </p>A+
        </p>
        <div className="w-40 ml-4 h-1 mt-2 bg-orange-500"></div>
        <p className="text-xl flex mt-1">
          <p className="text-lg mr-2 ml-4 text-orange-500">Programa: </p>ADSO
        </p>
        <p className="text-xl flex ">
          <p className="text-lg mr-2 ml-4 text-orange-500">Ficha: </p>2669742
        </p>
        <div className="w-20 ml-4 h-1 mt-2 bg-orange-500"></div>
        <p className="text-xl mr-2 ml-4 mt-2 text-black">Regional Cauca</p>
        <p className="text-xl mr-2 ml-4 mb-6 text-orange-600">C.T.P.I.</p>
      </div>
    </div>
  );
};

export default CarnetAprendiz;
