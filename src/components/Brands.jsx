import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Brands = () => {
  const marcasDeCarros = [
    "/images/marca1.png",
    "/images/marca2.png",
    "/images/marca3.png",
    "/images/marca4.png",
    "/images/marca5.png",
    "/images/marca6.png",
    "/images/marca7.png",
    "/images/marca8.png",
    "/images/marca9.png",
    "/images/marca10.png",
    "/images/marca11.png",
    "/images/marca12.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? marcasDeCarros.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === marcasDeCarros.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="h-20 border border-neutral-300 py-2 mb-4 flex items-center justify-between">
      <button
        onClick={handlePrev}
        className="px-3 py-2 ml-5 bg-yellow-400 hover:bg-yellow-200 rounded-lg"
      >
        ←
      </button>

      <div className="flex justify-center space-x-10">
        {marcasDeCarros
          .concat(marcasDeCarros) // Duplica el array para el comportamiento cíclico
          .slice(currentIndex, currentIndex + 10) // Muestra 10 elementos a partir del índice actual
          .map((marca, index) => (
            <div
              key={index}
              className="w-32 h-16 mx-1 flex items-center justify-center border border-gray-400 shadow-lg rounded-lg"
            >
              <Image
                src={marca}
                alt={`Marca ${index + 1}`}
                width={70}
                height={70}
                className="object-cover"
                style={{ padding: "30px" }}
              />
            </div>
          ))}
      </div>

      <button
        onClick={handleNext}
        className="px-3 py-2 mr-5 bg-yellow-400 hover:bg-yellow-200 rounded-lg"
      >
        →
      </button>
    </div>
  );
};

export default Brands;
