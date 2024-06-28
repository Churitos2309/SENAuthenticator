"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/navbar';
import Image from 'next/image';

import imagen1 from "../../../../public/assets/foto1.jpg";
import imagen2 from "../../../../public/assets/foto2.jpg";
import imagen3 from "../../../../public/assets/foto3.jpg";

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const slides = [imagen1, imagen2, imagen3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div>
      <header>
        <Navbar op1="Home" op2='Reportes' op3='Solicitudes' />
      </header>
      <h1>Hola</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a rerum ipsa cupiditate numquam quaerat quod aliquam nulla, voluptatibus sequi ut minima voluptates ea. Rem iusto perferendis esse expedita ipsum?</p>
      <div className="carousel w-full flex justify-center items-center">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item relative w-full ${index === currentSlide ? 'block' : 'hidden'}`}>
            <Image src={slide} alt={`Slide Image ${index + 1}`} width={400} height={400} className="rounded-lg mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
