import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {


  return (


    <footer className="sm:h-1/3 md:h-1/3 lg:h-1/3 xl:h-1/3 2xl:h-1/3 3xl:h-1/3 4xl:h-96 flex items-start bg-gray-800 text-white pt-4">
        
      <div className="w-1/3 ml-4">
        <p className="text-2xl text-center font-bold text-secFormColor my-2">
          Dónde estamos:
        </p>

        <p className="font-bold text-secFormColor">Dirección:</p>
        <p className="mb-3">
          Cra. 8 #7 - 26, La Candelaria, Bogotá, Cundinamarca
        </p>

        <p className="font-bold text-secFormColor">Teléfonos:</p>
        <p>
          <span className="font-bold">Venta de vehículos: </span>
          3002604549
        </p>
        <p>
          <span className="font-bold">Servicio / Repuestos: </span>
          3002604549
        </p>
        <p>
          <span className="font-bold">Call Center: </span>
          3002604549
        </p>

        <p className="font-bold text-secFormColor mt-3">
          Horarios de atención:
        </p>
        <p className="mb-0">08:00 a. m. - 04:00 p. m.</p>
      </div>

      <div className="w-1/3 space-y-2">
        <p className="text-2xl text-center font-bold text-secFormColor my-2">
          Canales de atención:
        </p>

        <a
          href="https://www.google.com/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center"
        >
          Asesoría en linea
        </a>
        <a
          href="https://www.google.com/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-center"
        >
          Chatbot
        </a>
        <a
          href="https://www.google.com/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-center"
        >
          PQRSD
        </a>
        <p className="text-white text-center"> Linea de atención nacional </p>
        <p className="text-white text-center" style={{ marginTop: "0px" }}>
          01 8000 8000 8000
        </p>
      </div>

      <div className="sm:w-2/5 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 3xl:w-1/3 4xl:w-1/3 h-full">
        <p className="text-2xl text-center font-bold text-secFormColor my-2">
          Redes Sociales
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-600 text-3xl hover:text-blue-800 h-12 w-12"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-pink-500 text-3xl hover:text-pink-700 h-12 w-12"
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-red-600 text-3xl hover:text-red-800 h-12 w-12"
            />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-green-600 text-3xl hover:text-green-800 h-12 w-12"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
