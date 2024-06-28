// "use client";
// import Navbar from "../../../components/Navbar/navbar";
// import FormObjetos from "../components/FormObjetos";
// import imgFormObjetos from "../../../../public/assets/FondoLogin.jpg";
// import Footer from "../components/Footer";
// import { useState } from "react";
// import { PiProhibitBold } from "react-icons/pi";
// import { TiDelete } from "react-icons/ti";

// const Objetos_Aprendiz =() =>{

//   // Estado para controlar si el modal está abierto o cerrado
//   const [modalOpen, setModalOpen] = useState(false);

//   // Función para abrir el modal
//   const openModal = () => {
//     setModalOpen(true);
//   };

//   // Función para cerrar el modal
//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <div>
//         <div className="fixed z-50 w-full">
//           <Navbar
//             op1="Inicio"
//             op2="Mis Objetos"
//             link1="/Aprendiz/inicio"
//             link2="/Aprendiz/Objetos"
//             link3=''
//           ></Navbar>
//         </div>

//         <div className="flex flex-col ">
//           <div className="flex container mx-auto flex-col">
//             <div className="flex mt-[20vh] flex-col md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
//               <h2 className="md:ml-[20vw] md:mb-[5vh]  text-center text-green-700 text-2xl">
//                 Objetos activos
//               </h2>
//               <div className="flex gap-10  p-5">


//                 <span
//                   onClick={openModal}
//                   className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white"
//                 >
//                   <div
//                     className=" flex relative overflow-hidden bg-cover bg-no-repeat"
//                     data-te-ripple-init
//                     data-te-ripple-color="light"
//                   >

//                     <a href="#!">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//                     </a>

//                     <a
//                       href="#"
//                       className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"
//                     >
//                       <TiDelete
//                         o
//                         className=" text-3xl  hover:text-black text-white"
//                       />
//                     </a>
//                   </div>
//                   <div className="font-semibold p-2 space-y-2">
//                     <p>Laptop DELL 2024 </p>
//                     <p className="text-green-400">Color: </p> gris y negro
//                     <p className="text-green-400">Serial:</p> G8rV3456fazl
//                     <p className="text-green-400">Fecha:</p> 7/03/2023
//                   </div>
//                 </span>

//                 <span
//                   onClick={openModal}
//                   className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white"
//                 >
//                   <div
//                     className=" flex relative overflow-hidden bg-cover bg-no-repeat"
//                     data-te-ripple-init
//                     data-te-ripple-color="light"
//                   >
//                     <img
//                       className="rounded-xl  sm:m-h-64  w-full "
//                       src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
//                       alt=""
//                     />
//                     <a href="#!">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//                     </a>

//                     <a
//                       href="#"
//                       className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"
//                     >
//                       <TiDelete
//                         o
//                         className=" text-3xl  hover:text-black text-white"
//                       />
//                     </a>
//                   </div>
//                   <div className="font-semibold p-2 space-y-2">
//                     <p>Laptop DELL 2024 </p>
//                     <p className="text-green-400">Color: </p> gris y negro
//                     <p className="text-green-400">Serial:</p> G8rV3456fazl
//                     <p className="text-green-400">Fecha:</p> 7/03/2023
//                   </div>
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-col  mt-[5vh] lg:mt-[12vh] md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
//               <h2 className="md:ml-[20vw] md:mb-[5vh] text-2xl  text-center">
//                 Objetos Inactivos
//               </h2>
//               <div className="flex gap-10   p-5 ">
//                 <span
//                   onClick={openModal}
//                   className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white"
//                 >
//                   <div
//                     className=" flex relative overflow-hidden bg-cover bg-no-repeat"
//                     data-te-ripple-init
//                     data-te-ripple-color="light"
//                   >
//                     <img
//                       className="rounded-xl  sm:m-h-64  w-full "
//                       src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
//                       alt=""
//                     />
//                     <a href="#!">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//                     </a>

//                     <a
//                       href="#"
//                       className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"
//                     >
//                       <TiDelete
//                         o
//                         className=" text-3xl  hover:text-black text-white"
//                       />
//                     </a>
//                   </div>
//                   <div className="font-semibold p-2 space-y-2">
//                     <p>Laptop DELL 2024 </p>
//                     <p className="text-green-400">Color: </p> gris y negro
//                     <p className="text-green-400">Serial:</p> G8rV3456fazl
//                     <p className="text-green-400">Fecha:</p> 7/03/2023
//                   </div>
//                 </span>

//                 <span
//                   onClick={openModal}
//                   className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white"
//                 >
//                   <div
//                     className=" flex relative overflow-hidden bg-cover bg-no-repeat"
//                     data-te-ripple-init
//                     data-te-ripple-color="light"
//                   >
//                     <img
//                       className="rounded-xl  sm:m-h-64  w-full "
//                       src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
//                       alt=""
//                     />
//                     <a href="#!">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//                     </a>

//                     <a
//                       href="#"
//                       className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"
//                     >
//                       <TiDelete
//                         o
//                         className=" text-3xl  hover:text-black text-white"
//                       />
//                     </a>
//                   </div>
//                   <div className="font-semibold p-2 space-y-2">
//                     <p>Laptop DELL 2024 </p>
//                     <p className="text-green-400">Color: </p> gris y negro
//                     <p className="text-green-400">Serial:</p> G8rV3456fazl
//                     <p className="text-green-400">Fecha:</p> 7/03/2023
//                   </div>
//                 </span>

//                 <span
//                   onClick={openModal}
//                   className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white"
//                 >
//                   <div
//                     className=" flex relative overflow-hidden bg-cover bg-no-repeat"
//                     data-te-ripple-init
//                     data-te-ripple-color="light"
//                   >
//                     <img
//                       className="rounded-xl  sm:m-h-64  w-full "
//                       src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
//                       alt=""
//                     />
//                     <a href="#!">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//                     </a>

//                     <a
//                       href="#"
//                       className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"
//                     >
//                       <TiDelete
//                         o
//                         className=" text-3xl  hover:text-black text-white"
//                       />
//                     </a>
//                   </div>
//                   <div className="font-semibold p-2 space-y-2">
//                     <p>Laptop DELL 2024 </p>
//                     <p className="text-green-400">Color: </p> gris y negro
//                     <p className="text-green-400">Serial:</p> G8rV3456fazl
//                     <p className="text-green-400">Fecha:</p> 7/03/2023
//                   </div>
//                 </span>
//               </div>

//               <div className=" rounded-lg rounded-t-3xl rounded-b-3xl mt-[10vh]  bg-[url({imgFormObjetos})] ">
//                 <FormObjetos></FormObjetos>
//               </div>

//               {/* Modal */}

//               {modalOpen && (
//                 <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//                   <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[90vw] max-h-[90vh] overflow-auto relative">
//                     <button
//                       onClick={closeModal}
//                       className="absolute sm:m-3  top-3 right-3 sm:top-5 sm:right-5 lg:top-6 lg:right-6 bg-green-600 hover:bg-green-800 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white rounded-full flex items-center justify-center"
//                     >
//                       X
//                     </button>
//                     <div className="flex flex-col lg:flex-row">
//                       <img
//                         className="w-full lg:w-[30vw] h-auto"
//                         src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
//                         alt=""
//                       />
//                       <div className="font-semibold p-2 space-y-2 lg:ml-[3vw] text-2xl">
//                         <p>Laptop DELL 2024</p>
//                         <p className="flex">
//                           <span className="text-green-400">Color:</span> gris y
//                           negro
//                         </p>
//                         <p className="flex">
//                           <span className="text-green-400">Serial:</span>{" "}
//                           G8rV3456fazl
//                         </p>
//                         <p className="flex">
//                           <span className="text-green-400">Fecha:</span>{" "}
//                           7/03/2023
//                         </p>
//                       </div>
//                     </div>
//                     <label className="inline-flex items-center cursor-pointer mt-4">
//                       <input
//                         type="checkbox"
//                         value=""
//                         className="sr-only peer"
//                       />
//                       <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                       <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
//                         Activar
//                       </span>
//                     </label>
//                     <div className="flex justify-end mt-4 lg:mt-0">
//                       <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg mr-2">
//                         Editar
//                       </button>
//                       <button
//                         onClick={closeModal}
//                         className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
//                       >
//                         Eliminar
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <Footer className="mt-auto"></Footer>

//       </div>
//     </>
//   );
// };

// export default Objetos_Aprendiz;

// //////////////////////////////////////////// footer responsivo

// import NavbarAprendiz from "../componentes/navbar";
// import FormObjetos from "./formObjetos";
// import imgFormObjetos from "../../../../public/assets/espacio-trabajo-tecnologia-d-isometrica.avif";
// import Footer from "../componentes/footer";
// import { useState } from "react";
// import { PiProhibitBold } from "react-icons/pi";
// import { TiDelete } from "react-icons/ti";

// const Objetos_Aprendiz = () => {
//   // Estado para controlar si el modal está abierto o cerrado
//   const [modalOpen, setModalOpen] = useState(false);

//   // Función para abrir el modal
//   const openModal = () => {
//     setModalOpen(true);
//   };

//   // Función para cerrar el modal
//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <div>
//         <NavbarAprendiz></NavbarAprendiz>

//         <div className="flex flex-col ">
//           <div className="flex container mx-auto flex-col">
//             <div className="flex mt-[20vh] flex-col md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
//               <h2 className="md:ml-[20vw] md:mb-[5vh]  text-center text-green-700 text-2xl">
//                 Objetos activos
//               </h2>
//               <div className="flex gap-10  p-5">
//                 {/* Contenido de objetos activos */}
//               </div>
//             </div>

//             <div className="flex flex-col mt-[5vh] lg:mt-[12vh] md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
//               <h2 className="md:ml-[20vw] md:mb-[5vh] text-2xl  text-center">
//                 Objetos Inactivos
//               </h2>
//               <div className="flex gap-10  p-5">
//                 {/* Contenido de objetos inactivos */}
//               </div>

//               <div className=" rounded-lg rounded-t-3xl rounded-b-3xl mt-[10vh]  bg-[url({imgFormObjetos})] ">
//                 <FormObjetos></FormObjetos>
//               </div>

//               {/* Modal */}

//               {modalOpen && (
//                 <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//                   <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[90vw] max-h-[90vh] overflow-auto relative">
//                     {/* Contenido del modal */}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//         </div>
//         {/* Footer responsivo */}
//         <Footer className="mt-auto"></Footer>
//       </div>
//     </>
//   );
// };

// export default Objetos_Aprendiz;

import Navbar from "../../../components/Navbar/navbar";
import FormObjetos from "../components/FormObjetos";
import imgFormObjetos from "../../../../public/assets/FondoLogin.jpg";
import Footer from "../components/Footer";
import Cartas from "../components/cardObjetos";
// import { PiProhibitBold } from "react-icons/pi";
// import { TiDelete } from "react-icons/ti";

const Objetos_Aprendiz = () => {
  return (
    <>
      <div className="fixed z-50 w-full">
        <Navbar
          op1="Inicio"
          op2="Mis Objetos"
          link1="/Aprendiz/inicio"
          link2="/Aprendiz/Objetos"
          link3=""
        ></Navbar>
      </div>

      <div className="absolute mt-32">
       
        <Cartas></Cartas>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Objetos_Aprendiz;

// //////////////////////////////////////////// footer responsivo

// import NavbarAprendiz from "../componentes/navbar";
// import FormObjetos from "./formObjetos";
// import imgFormObjetos from "../../../../public/assets/espacio-trabajo-tecnologia-d-isometrica.avif";
// import Footer from "../componentes/footer";
// import { useState } from "react";
// import { PiProhibitBold } from "react-icons/pi";
// import { TiDelete } from "react-icons/ti";

// const Objetos_Aprendiz = () => {
//   // Estado para controlar si el modal está abierto o cerrado
//   const [modalOpen, setModalOpen] = useState(false);

//   // Función para abrir el modal
//   const openModal = () => {
//     setModalOpen(true);
//   };

//   // Función para cerrar el modal
//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <div>
//         <NavbarAprendiz></NavbarAprendiz>

//         <div className="flex flex-col ">
//           <div className="flex container mx-auto flex-col">
//             <div className="flex mt-[20vh] flex-col md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
//               <h2 className="md:ml-[20vw] md:mb-[5vh]  text-center text-green-700 text-2xl">
//                 Objetos activos
//               </h2>
//               <div className="flex gap-10  p-5">
//                 {/* Contenido de objetos activos */}
//               </div>
//             </div>

//             <div className="flex flex-col mt-[5vh] lg:mt-[12vh] md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
//               <h2 className="md:ml-[20vw] md:mb-[5vh] text-2xl  text-center">
//                 Objetos Inactivos
//               </h2>
//               <div className="flex gap-10  p-5">
//                 {/* Contenido de objetos inactivos */}
//               </div>

//               <div className=" rounded-lg rounded-t-3xl rounded-b-3xl mt-[10vh]  bg-[url({imgFormObjetos})] ">
//                 <FormObjetos></FormObjetos>
//               </div>

//               {/* Modal */}

//               {modalOpen && (
//                 <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//                   <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[90vw] max-h-[90vh] overflow-auto relative">
//                     {/* Contenido del modal */}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//         </div>
//         {/* Footer responsivo */}
//         <Footer className="mt-auto"></Footer>
//       </div>
//     </>
//   );
// };

// export default Objetos_Aprendiz;
