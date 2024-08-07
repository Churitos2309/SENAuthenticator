// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../components/Static/Style/login.css";


// // import Modal from "../Modal/modal";

// import Logo from "../../../public/img/Logo Reconocimiento Facial - Blanco.png";
// import escudo from "../../../public/img/logo-sena-naranja-png-2022.png";
// import encabezado from "../../../public/img/logoSofiaLogin.png"

// export default function Login() {
//   const [mostrar, setMostrar] = useState(false);

//   return (
//     <div>
//         <div className="bb ">
//           <div className="Contenedor">
//             <div className="Logo ">
//               <img src={Logo} alt="Logo"  width={150} height={150} />
//             </div>

//             <div className="Login ">
//               <div className="Loogin">
//                 <form action="">
//                   <div className="formulario">
//                     <div className="flex flex-col justify-center gap-4 items-center">
//                     <img src={encabezado} alt="Logo" width={120} height={120} />
//                     <span className="font-bold text-lg">¡Bienvenidos!</span>
//                     </div>

//                     <div className="TD">
//                       <ion-icon name="people-circle-outline"></ion-icon>
//                       <select name="" id="">
//                         <option hidden selected>
//                           Tipo de documento
//                         </option>
//                         <option value="CC">CC</option>
//                         <option value="TI">TI</option>
//                         <option value="PPT">PPT</option>
//                         <option value="CE">CE</option>
//                       </select>
//                     </div>
                    
//                     <div className="IP ">
//                       <ion-icon name="keypad-outline"></ion-icon>
//                       <input
//                         type="text"
//                         placeholder="Numero de documento"
//                         name=""
//                         id=""
//                       />
//                     </div>
//                     <div className="IP">
//                       <ion-icon name="key-outline"></ion-icon>
//                       <input
//                         type="password"
//                         placeholder="Contraseña"
//                         name=""
//                         id=""
//                       />
//                     </div>
//                   </div>
//                 </form>
//                 <div>
//                   <button className="BB" onClick={() => setMostrar(true)}>
//                     Ingresar
//                   </button>
//                   {/* <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
//                     <div className="Oopciones">
//                       <h3>Rol</h3>
//                       <div className="Opp">
//                         <Link href="/Administrativo">Administrativo</Link>
//                         <Link href="/guardia/guardiaInicio">Vigilante</Link>
//                         <Link href="/Instructor">Instructor</Link>
//                         <Link href="/Aprendiz">Aprendiz</Link>
//                       </div>
//                     </div>
//                   </Modal> */}
//                 </div>
//                 <Link className="underline" href="/OlvidarContraseña">
//                   Olvide mi contraseña
//                 </Link>
//                 <Link className="underline" href="/Register">
//                   Registrarse
//                 </Link>
//               </div>
//             </div>

//             <div className="Escudo">
//               <img src={escudo} alt="Logo" width={150} height={150} />
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// }




// ////////////////////////// Login2

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "../../../public/img/Logo Reconocimiento Facial - Blanco.png";
import escudo from "../../../public/img/logo-sena-naranja-png-2022.png";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{
        backgroundImage: "url('https://img.freepik.com/vector-premium/fondo-estructura-molecular-fondo-pantalla-plantilla-ciencia-o-banner-moleculas-adn_191234-1142.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      <div className="bg-purple-800 bg-opacity-70 p-6 rounded-lg shadow-lg max-w-6xl w-full flex flex-wrap  justify-between">
        <div className="w-full lg:w-2/3 lg:pr-10 mb-6 lg:mb-0">

          <div className="flex gap-4 mb-6 [@media(max-width:381px)]:justify-center">
            <img src={escudo} alt="Escudo" className=" top-4 left-4 w-16 sm:w-16 md:w-16 lg:w-14 xl:w-16 [@media(max-width:381px)]:w-12" />
                
            <logo className='flex items-center'>
                    <img src={Logo} alt="Logo" className="mr-3 w-11 sm:w-14 md:w-16 lg:w-11 xl:w-14 " />
                                                    {/* medidas arbitrarias */}
                    <h1 className="text-white text-lg [@media(max-width:381px)]:hidden  sm:text-3xl md:text-3xl lg:text-2xl font-bold">SENAuthenticator</h1>
            </logo>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Bienvenido!</h1>
          <p className="text-purple-300 mb-6 text-lg mt-16">
          El reconocimiento facial ofrece una forma segura y cómoda de autenticación. 
          Al utilizar las características únicas de cada rostro, esta tecnología permite un acceso rápido y preciso.
          </p>
          <p className="inline-block text-white hover:text-blue-400 text-lg">Leer más...</p>
        </div>
        <div className="w-full lg:w-1/3 bg-purple-700 p-6 lg:p-10 rounded-3xl">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-3xl font-bold mb-8 text-center">Iniciar sesión</h2>
          <form className=''>
            <div className="mb-6">
              <label className="block text-purple-300 mb-2 text-lg" htmlFor="selection">Tipo de identificación</label>
              <div className="relative">
                <select
                  className="w-full p-3 rounded bg-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  id="selection"
                >
                  <option value="">Seleccionar...</option>
                  <option value="1">Cédula</option>
                  <option value="2">Tarjeta de identidad</option>
                  <option value="3">Pasaporte</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i className="fas fa-chevron-down text-white"></i>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-purple-300 mb-2 text-lg" htmlFor="username">Número identificación</label>
              <div className="relative">
                <input
                  className="w-full p-3 rounded bg-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  id="username"
                  type="text"
                  placeholder="Identificación"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i className="fas fa-address-book text-white"></i>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-purple-300 mb-2 text-lg" htmlFor="password">Contraseña</label>
              <div className="relative">
                <input
                  className="w-full p-3 rounded bg-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i className="fas fa-lock text-white"></i>
                </div>
              </div>
            </div>
            <button
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white p-3 rounded-full text-lg"
              type="submit"
            >
              Entrar
            </button>
            <div className="flex justify-around mt-6 text-white text-2xl">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
