"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/NavBarInstructor/NavBarInstructor';
import Image from 'next/image';

import imagen1 from '../../../../public/assets/foto1.jpg';
import imagen2 from '../../../../public/assets/foto2.jpg';
import imagen3 from '../../../../public/assets/foto3.jpg';

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
        <Navbar op1="home" op2='reportes' />
      </header>
      <h1>Hola</h1>
      <div className="">
        <div className="carousel w-full flex justify-center items-center mt-[30vh]">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item relative w-full ${index === currentSlide ? 'block' : 'hidden'}`}>
              <Image src={slide} alt={`Slide Image ${index + 1}`} width={200} height={200} className="rounded-lg mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
