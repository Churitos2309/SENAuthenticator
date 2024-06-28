// src/app/Instructor.js
import React from 'react';
// import Navbar from '@/components/Navbar/navbar';
import Navbar from '@/components/NavBarInstructor/NavBarInstructor';

export default function page() {
  return (
    <div>
    <header>
      <Navbar op1="home" op2='reportes' op3='fichas' />
    </header>
    <h1>Hola</h1>
    <div className="flex items-center justify-center">
      <div className="flex justify-center space-x-4 mt-[30vh]">
        {/* <div className="w-32 h-32">
          <Image
            src={imagen}
            width={200}
            height={200}
            alt="Imagen 1"
          />
        </div> */}
        {/* <div className="w-32 h-32">
          <Image
            src={imagen}
            width={200}
            height={200}
            alt="Imagen 2"
          />
        </div>
        <div className="w-32 h-32">
          <Image
            src={imagen}
            width={200}
            height={200}
            alt="Imagen 3"
          />
        </div> */}
      </div>
    </div>
  </div>
  )
}
