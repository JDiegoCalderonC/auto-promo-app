"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    departamento: "",
    ciudad: "",
    celular: "",
    email: "",
    autorizado: false,
  });
  const [codigoGenerado, setCodigoGenerado] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para generar un código alfanumérico
    const codigo = Math.random().toString(36).substr(2, 8).toUpperCase(); // Código aleatorio
    setCodigoGenerado(codigo);
    setFormData({
      nombre: "",
      apellido: "",
      cedula: "",
      departamento: "",
      ciudad: "",
      celular: "",
      email: "",
      autorizado: false,
    });
  };

  return (
    <div className="w-full h-full">
      
      <nav className="h-1/10 text-3xl text-blue-600 font-bold font-serif py-2">
        AutoBogotá
      </nav>

      <div className="h-1/10 border border-neutral-300 py-2 mb-4">Iconos</div>

      {!codigoGenerado ? (
        <div className="flex justify-center h-3/5">

          <form
            onSubmit={handleSubmit}
            className="w-3/5 h-full text-lg p-5 space-y-2 border border-neutral-300 rounded-lg"
          >

            <h1 className="text-xl font-semibold text-center my-3">
              Participa en Nuestro Concurso!
            </h1>

            <div className="flex flex-col items-center">
              <label className="block w-1/2">Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-1/2"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2">Apellido:</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-1/2"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2">Cédula:</label>
              <input
                type="number"
                name="cedula"
                value={formData.cedula}
                onChange={handleChange}
                required
                className="w-1/2"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2">Departamento:</label>
              <select
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
                required
                className="w-1/2"
              >
                <option value="">Selecciona</option>
                <option value="Cundinamarca">Cundinamarca</option>
                <option value="Antioquia">Antioquia</option>
                {/* */}
              </select>
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2">Ciudad:</label>
              <select
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                required
                className="w-1/2"
              >
                <option value="">Selecciona</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                {/*  ciudades según el departamento */}
              </select>
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2">Celular:</label>
              <input
                type="number"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                required
                className="w-1/2"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2">Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-1/2"
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <input
                type="checkbox"
                name="autorizado"
                checked={formData.autorizado}
                onChange={handleChange}
                required
                className="w-5 h-5 mr-2"
              />
              <label className="">
                Autorizo el tratamiento de mis datos de acuerdo a la política de
                protección de datos.
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h2>¡Registro Completado!</h2>
          <p>
            Tu código de participación es: <strong>{codigoGenerado}</strong>
          </p>
        </div>
      )}

      <footer className="h-1/3 flex items-start text-center bg-gray-800 text-white p-4">
        
        <div className="w-1/3">
          <p>Vehiculos</p>
        </div>

        <div className="w-1/3">
          <p>Servicios</p>
        </div>

        <div className="w-1/3">
          <p>Contáctenos →</p>
        </div>
      </footer>

    </div>
  );
}
