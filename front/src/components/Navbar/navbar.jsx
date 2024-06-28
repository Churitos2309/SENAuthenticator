"use client";

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Dropdown from "../DropDown/dropdown";
import Image from "next/image";
import Link from "next/link";



import "../media/Style/navbar.css";
import "../media/Style/navbarVigilante.css";

import avatar from "../media/Img/Vigilante.png";
import Logo from "../../appMedia/Img/Logo Reconocimiento Facial - Blanco.png";

export default function Navbar({ op1, op2, op3, link1, link2, link3 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Nav ">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Image src={Logo} alt="Logo" width={60} height={60} />
          </div>
          <div className="flex-grow text-center md:text-left md:ml-4">
            <h1 className="text-white font-bold text-xl">SENAuthenticator</h1>
          </div>
          
          <div className="md:hidden flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            >
              <svg
                className="h-8 w-8 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2">

            <div className="flex justify-center items-center ÑÑ">
              <Link href={link1}>
                <span className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-bold">
                  {op1}
                </span>
              </Link>
              <Link href={link2}>
                <span className="text-white hover:text-gray-200 font-bold px-3 py-2 rounded-md text-base">
                  {op2}
                </span>
              </Link>
              <Link href={link3}>
                <span className="text-white hover:text-gray-200 font-bold px-3 py-2 rounded-md text-base">
                  {op3}
                </span>
              </Link>
            </div>
            <div className=" camp text-white ">
              <ion-icon name="notifications"></ion-icon>
            </div>
            <div className="avatar">
              <div >
                <Image src={avatar} alt="Logo" className="rounded-full" width={50} height={50} />
              </div>
            </div>
            <Dropdown label="">
              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-center items-center">
                  <div className="avatar">
                    <div className="w-32 rounded-full">
                      <Image src={avatar} alt="Logo"  />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className=" text-center font-medium text-gray-700 block px-4 py-2 text-medium">
                    Nombre
                  </h1>
                  <h4 className=" text-center text-gray-700 block px-4 py-2 text-sm">
                    Correo@correo.com
                  </h4>
                </div>
              </div>
              <hr />
              <div className="SalirNav ">
                <Link href="/">
                  <span className="ruta text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    Salir
                  </span>
                </Link>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href={link1}>
                <span className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
                  {op1}
                </span>
              </Link>
              <Link href={link2}>
                <span className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
                  {op2}
                </span>
              </Link>
              <Link href={link3}>
                <span className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
                  {op3}
                </span>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
