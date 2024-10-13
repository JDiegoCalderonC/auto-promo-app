"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

import { getDepartments, getCities } from "../../utils/geonames";
import Navbar from "@/components/Navbar";
import PrizeCode from "@/components/PrizeCode";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [code, setCode] = useState("");
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

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

  const images = [
    "/wallpaper1.jpg",
    "/wallpaper2.jpg",
    "/wallpaper3.jpg"
  ];

  const OpenModal = () => {
    setIsModalOpen(true);
  };

  const generateCode = () => {
    const codigo = uuidv4(); // Genera un UUID
    const codigoCorto = codigo.replace(/-/g, '').substr(0, 12).toUpperCase();
    setCode(codigoCorto);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Validar solo caracteres alfabéticos para los campos "nombre" y "apellido"
    if (
      (name === "nombre" || name === "apellido") &&
      !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `El ${name} solo debe contener letras.`,
      });
      return;
    } else if ((name === "nombre" || name === "apellido") && /\s{2,}/.test(value)) {
    return;
  }

    // Validar solo caracteres válidos para el campo "email"
    if (name === "email" && !/^[a-zA-Z0-9@.]*$/.test(value)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `El correo electrónico debe contener solo letras, números y @.`,
      });
      return;
    }

    // Validar solo números para el campo "cedula"
    if ((name === "cedula" || name === "celular") && !/^\d*$/.test(value)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La cédula debe contener solo números.",
      });
      return;
    }

    // Si el campo es "departamento", actualiza las ciudades
    if (name === "departamento") {
      const selectedDepartment = departments.find(
        (department) => department.name === value
      );
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ciudad: "", // Resetea la ciudad al cambiar el departamento
      }));
      setSelectedDepartment(selectedDepartment.id);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      code: code, // Asigna el valor del código
    }));

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

    generateCode();
    OpenModal();
    console.log(formData);
  };

  useEffect(() => {
    const fetchDepartmentData = async () => {
      const departments = await getDepartments();
      setDepartments(departments);
    };

    fetchDepartmentData();
  }, []);

  useEffect(() => {
    const fetchCitiesData = async () => {
      const cities = await getCities(selectedDepartment);
      setCities(cities);
    };

    fetchCitiesData();
  }, [selectedDepartment]);


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full" >

      <Navbar />

      <Brands />

      <div 
        className="flex justify-center h-3/5 py-8 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(/images/${images[currentImageIndex]})`,
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-3/5 2xl:w-1/2 3xl:w-1/2 4xl:w-1/2 h-full text-lg p-5 space-y-4 border border-neutral-300 rounded-2xl bg-formColor"
        >
          <h1 className="text-2xl font-semibold text-center mt-2 text-secFormColor">
            Registrate para participar en Nuestro Concurso!
          </h1>

          <div className="flex items-center justify-center">
            <div className="w-2/3 border-b border-white mb-2"></div>
          </div>

          <div className="flex flex-col items-center">
            <label className="block w-1/2 mb-1 text-white">Nombre*</label>
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
            <label className="block w-1/2 mb-1 text-white">Apellido*</label>
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
            <label className="block w-1/2 mb-1 text-white">Cédula*</label>
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
            <label className="block w-1/2 mb-1 text-white">Departamento*</label>
            <select
              name="departamento"
              value={formData.departamento}
              onChange={handleChange}
              required
              className="w-1/2 border border-gray-400 rounded-lg p-1"
            >
              <option value="">Selecciona</option>
              {departments.map((department) => (
                <option key={department.id} value={department.name}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center">
            <label className="block w-1/2 mb-1 text-white">Ciudad*</label>
            <select
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
              className="w-1/2 border border-gray-400 rounded-lg p-1"
            >
              <option value="">Selecciona</option>
              {cities?.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center">
            <label className="block w-1/2 mb-1 text-white">Celular*</label>
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
            <label className="block w-1/2 mb-1 text-white">
              Correo Electrónico*
            </label>
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
            <label className="max-w-3xl text-white mt-2">
              Autorizo el tratamiento de mis datos de acuerdo con la finalidad
              establecida en la
              <a
                href="https://www.minambiente.gov.co/politica-de-proteccion-de-datos-personales/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secFormColor"
              >
                política de protección de datos personales.
              </a>
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

      <Footer />

      <p className="font-bold font-serif text-end bg-gray-800 text-white pb-2 pr-4 -mt-6">
        © 2024 Todos los derechos reservados
      </p>

      {isModalOpen && (
        <PrizeCode closeModal={() => setIsModalOpen(false)} code={code} />
      )}
    </div>
  );
}
