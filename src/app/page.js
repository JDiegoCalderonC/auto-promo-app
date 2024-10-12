"use client";

import Image from "next/image";
import { useState } from "react";
import logo from '../../public/images/logo.jpg';


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
      
      <nav className="h-1/10 p-1 flex items-center">
      
        <Image 
          src={logo}
          alt="Logo AutoPromo"
          width={70} 
          height={70}
        />
        <h1 className="text-4xl text-indigo-700 font-bold font-serif ml-3">AutoPromo</h1>
        <h1 className="text-base text-black font-bold font-serif ml-1 mt-2 bg-yellow-400 px-2">Bogotá</h1>

      </nav>

      <div className="h-1/10 border border-neutral-300 py-2 mb-4">Iconos</div>

      {!codigoGenerado ? (
        <div className="flex justify-center h-3/5">

          <form
            onSubmit={handleSubmit}
            className="w-3/5 h-full text-lg p-5 space-y-4 border border-neutral-300 rounded-lg"
          >

            <h1 className="text-2xl font-semibold text-center mt-2">
              Participa en Nuestro Concurso!
            </h1>

            <div className="flex items-center justify-center">
              <div className="w-2/3 border-b border-neutral-600 mb-2"></div>
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2 mb-1">Nombre*</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-1/2 border border-gray-400 rounded-lg p-1"
                placeholder="Nombre"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2 mb-1">Apellido*</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-1/2 border border-gray-400 rounded-lg p-1"
                placeholder="Apellido"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2 mb-1">Cédula*</label>
              <input
                type="number"
                name="cedula"
                value={formData.cedula}
                onChange={handleChange}
                required
                className="w-1/2 border border-gray-400 rounded-lg p-1"
                placeholder="Cédula de Ciudadania"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2 mb-1">Departamento*</label>
              <select
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
                required
                className="w-1/2 border border-gray-400 rounded-lg p-1"
              >
                <option value="">Selecciona</option>
                <option value="Cundinamarca">Cundinamarca</option>
                <option value="Antioquia">Antioquia</option>
                {/* */}
              </select>
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2 mb-1">Ciudad*</label>
              <select
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                required
                className="w-1/2 border border-gray-400 rounded-lg p-1"
              >
                <option value="">Selecciona</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                {/*  ciudades según el departamento */}
              </select>
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2 mb-1">Celular*</label>
              <input
                type="number"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                required
                className="w-1/2 border border-gray-400 rounded-lg p-1"
                placeholder="Teléfono"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="block w-1/2 mb-1">Correo Electrónico*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-1/2 border border-gray-400 rounded-lg p-1"
                placeholder="email@address.com"
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <input
                type="checkbox"
                name="autorizado"
                checked={formData.autorizado}
                onChange={handleChange}
                required
                className="w-5 h-5 mr-4"
              />
              <label className="max-w-3xl">
                Autorizo el tratamiento de mis datos de acuerdo con la finalidad establecida en la política de protección de datos personales.
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
