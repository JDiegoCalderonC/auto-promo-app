import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import logosf from "../../public/images/logosf.png"; // Importa el logo de la aplicación
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * Componente Navbar que muestra el menú de navegación principal de la aplicación.
 * 
 * @returns {JSX.Element} - El navbar con enlaces a vehículos y servicios.
 */
const Navbar = () => {
  // Estado para mostrar/ocultar el menú de vehículos y servicios
  const [showVehicles, setShowVehicles] = useState(false);
  const [showServices, setShowServices] = useState(false);

  // Estado para la ciudad que se muestra en el Navbar
  const [city, setCity] = useState("Bogotá");

  // Función para alternar la visibilidad del menú de vehículos
  const toggleVehicles = () => {
    setShowVehicles(!showVehicles);
    setShowServices(false);
  };

  // Función para alternar la visibilidad del menú de servicios
  const toggleServices = () => {
    setShowServices(!showServices); 
    setShowVehicles(false); 
  };

  // Efecto para alternar la ciudad cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCity((prev) => (prev === "Bogotá" ? "Colombia" : "Bogotá"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="h-1/10 p-1 flex items-center bg-black">
      {/* Logo de la aplicación */}
      <Image
        src={logosf}
        alt="Logo AutoPromo"
        width={70}
        height={70}
        className="ml-3 p-1"
      />

      <div className="flex items-center justify-center">
        <div className="h-12 border-r border-white mx-1"></div>
      </div>

      {/* Título de la aplicación */}
      <h1 className="sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl text-white font-bold font-serif ml-3 mt-2">
        AutoPromo
      </h1>

      <div className="relative ml-2">
        {/* Lugar que cambia cada 2 segundos */}
        <h1
          className={`absolute text-sm text-black font-bold font-serif bg-yellow-400 px-2 transition-opacity duration-1000 ${
            city === "Bogotá" ? "opacity-100" : "opacity-0"
          }`}
        >
          Bogotá
        </h1>

        <h1
          className={`absolute text-sm text-black font-bold font-serif bg-yellow-400 px-2 transition-opacity duration-1000 ${
            city === "Colombia" ? "opacity-100" : "opacity-0"
          }`}
        >
          Colombia
        </h1>
      </div>

      <div className="text-white flex justify-end w-full">
        {/* Menú de vehículos */}
        <div className="mr-4">
          <button
            onClick={toggleVehicles}
            className="mr-4 hover:text-yellow-400"
          >
            Vehículos
            <FontAwesomeIcon
              icon={faChevronDown}
              className="ml-1 h-4 w-4 inline"
            />
          </button>
          {showVehicles && (
            <ul className="absolute bg-secFormColor text-white p-4 rounded shadow-xl mt-2">
              <a
                href="https://www.google.com/search?q=automovil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 block"
              >
                Automóviles
              </a>
              <a
                href="https://www.google.com/search?q=camioneta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 block"
              >
                Camionetas
              </a>
              <a
                href="https://www.google.com/search?q=pickup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 block"
              >
                Pickups
              </a>
              <a
                href="https://www.google.com/search?q=carro+electrico"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 block"
              >
                Eléctricos
              </a>
              <a
                href="https://www.google.com/search?q=carro+deportivo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 block"
              >
                Deportivos
              </a>
            </ul>
          )}
        </div>

        {/* Menú de servicios */}
        <div className="mr-4">
          <button
            onClick={toggleServices}
            className="mr-4 hover:text-yellow-400"
          >
            Servicios
            <FontAwesomeIcon
              icon={faChevronDown}
              className="ml-1 h-4 w-4 inline"
            />
          </button>
          {showServices && (
            <ul className="absolute bg-secFormColor text-white p-4 rounded shadow-xl mt-2">
              <a
                href="https://www.google.com/search?q=test+drive"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 block"
              >
                Test Drive
              </a>
              <a
                href="https://www.google.com/search?q=seguros"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 block"
              >
                Seguros
              </a>
              <a
                href="https://www.google.com/search?q=taller"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 block"
              >
                Taller
              </a>
              <a
                href="https://www.google.com/search?q=tramites"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 block"
              >
                Trámites
              </a>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
