import React, { useState } from "react"
import Modal from '../Modal/modal';
import Link from "next/link";
import Image from "next/image";

import "../../appMedia/Style/login.css"

import Logo from "../../appMedia/Img/Logo Reconocimiento Facial - Blanco.png"
import escudo from "../../appMedia/Img/logoVerdeSENA.png"

export default function Login() {
    const [mostrar, setMostrar] = useState(false);

    return (
      <main className="">
        <div className="bb">
          <div className="Contenedor">
            <div className="Logo">
              {/* <img className="logo" src={Logo} alt=""/> */}
              <Image src={Logo} alt="Logo" width={150} height={150} />
            </div>
  
            <div className="Login">
              <div className="Loogin">
                <form action="">
                  <div className="formulario">
                    <h1 className="font-serif text-xl">¡Bienvenido!</h1>
                    <div className="TD">
                      <ion-icon name="people-circle-outline"></ion-icon>
                      <select name="" id="">
                        <option hidden selected>
                          Tipo de documento
                        </option>
                        <option value="CC">CC</option>
                        <option value="TI">TI</option>
                        <option value="PPT">PPT</option>
                        <option value="CE">CE</option>
                      </select>
                    </div>
                    <div className="IP">
                      <ion-icon name="keypad-outline"></ion-icon>
                      <input
                        type="text"
                        placeholder="Numero de documento"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="IP">
                      <ion-icon name="key-outline"></ion-icon>
                      <input
                        type="password"
                        placeholder="Contraseña"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </form>
                <div>
                  <button className="BB" onClick={() => setMostrar(true)}>
                    Ingresar
                  </button>
                  <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
                    <div className="Oopciones">
                      <h3>Rol</h3>
                      <div className="Opp">
                        <Link href="/Administrador/AdministradorHome">Administrativo</Link>
                        <Link href="/Guardia/guardiaHome">Vigilante</Link>
                        <Link href="/Instructor">Instructor</Link>
                        <Link href="/Aprendiz/inicio">Aprendiz</Link>
                      </div>
                    </div>
                  </Modal>
                </div>
                <Link className="underline" href="/OlvidarContraseña">
                  Olvide mi contraseña
                </Link>
                <Link className="underline" href="/registroUser">
                  Registrarse
                </Link>
              </div>
            </div>
  
            <div className="Escudo">
              <Image src={escudo} alt="Logo" width={150} height={150} />
            </div>
          </div>
        </div>
      </main>
    );
  
}
