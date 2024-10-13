import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const PrizeCode = ({ closeModal, code }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const formattedDate = currentDateTime.toLocaleDateString("es-ES", {
    day: "numeric", // Número del día
    month: "long", // Nombre completo del mes
    year: "numeric", // Año completo
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="font-serif bg-white p-8 rounded-lg">

        <h3 className="text-indigo-500 font-bold text-4xl text-center">
          !Registro Completado!
        </h3>

        <div className="flex items-center justify-center">
          <div className="w-4/5 border-b border-gray-700 my-2"></div>
        </div>

        <h3 className="text-secFormColor font-bold text-4xl text-center">
          Código de <span className="text-secFormColor">Sorteo</span>
        </h3>

        <div className="flex items-center justify-center mt-2">
          <FontAwesomeIcon
            icon={faTicket}
            className="text-yellow-400 w-24 h-24 mr-4"
          />
          <p className="text-3xl font-bold ">{code}</p>
        </div>

        <p className="max-w-lg text-base text-justify ">
         {fullname} Guarda tu código con el que podrás participar en el sorteo del carro
          que se realizará en las proximas semanas.
        </p>

        <p className="font-bold text-center mt-6">
          No olvides seguirnos en nuestras redes sociales!
        </p>

        <div className="flex justify-center space-x-4 mt-2">
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

        <div className="flex justify-between space-x-3 mt-3">
          <p className="font-sans flex items-end justify-start -mb-6 text-sm">
            Codigo uuid generado: {formattedDate} / {currentDateTime.toLocaleTimeString()}
          </p>

          <button
            type="button"
            onClick={closeModal}
            className="w-20 h-8  bg-red-500 hover:bg-red-300 text-white text-base rounded-lg"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrizeCode;
