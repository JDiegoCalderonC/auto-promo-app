"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import logosf from '../../public/images/logosf.png';
import { getDepartments } from "../../utils/geonames";
import { getCities } from "../../utils/geonames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Swal from "sweetalert2";
import PrizeCode from "@/components/PrizeCode";

export default function Home() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [code, setCode] = useState("");
  const [city, setCity] = useState('Bogotá');

  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [cities, setCities] = useState([]);

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

  const OpenModal = () => {
    setIsModalOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? marcasDeCarros.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === marcasDeCarros.length - 1 ? 0 : prev + 1));
  };

  const generateCode = () => {
    // Lógica para generar un código alfanumérico
    const codigo = Math.random().toString(36).substr(2, 8).toUpperCase(); // Código aleatorio
    setCode(codigo);

   }

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    console.log(e)

    // Validar solo caracteres alfabéticos para los campos "nombre" y "apellido"
    if ((name === "nombre" || name === "apellido") && !/^[a-zA-Z]*$/.test(value)) {
      Swal.fire({
        icon: "error", title: "Oops...", text: `El ${name} debe contener solo letras.`,
      });
      return;
    }

    // Validar solo caracteres válidos para el campo "email"
    if (name === "email" && !/^[a-zA-Z0-9@.]*$/.test(value)) {
      Swal.fire({
        icon: "error", title: "Oops...", text: `El correo electrónico debe contener solo letras, números y @.`,
      });
      return;
    }

    // Validar solo números para el campo "cedula"
    if (name === "cedula" && !/^\d*$/.test(value)) {
      Swal.fire({
        icon: "error", title: "Oops...", text: "La cédula debe contener solo números.",
      });
      return;
    }

    // Si el campo es "departamento", actualiza las ciudades
    if (name === "departamento") {
      const selectedDepartment = departments.find(department => department.name === value);
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ciudad: "", // Resetea la ciudad al cambiar el departamento
      }));
      setSelectedDepartment(selectedDepartment.id);
      // console.log("key",key)
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

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

  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCity((prev) => (prev === 'Bogotá' ? 'Cundinamarca' : 'Bogotá'));
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);


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


  return (
    <div className="w-full h-full">
      
      <nav className="h-1/10 p-1 flex items-center bg-black">
      
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

        <h1 className="text-4xl text-white font-bold font-serif ml-3 mt-2">AutoPromo</h1>

        <div className="relative ml-2">
          {/* Texto de Bogotá */}
          <h1 className={`absolute text-sm text-black font-bold font-serif bg-yellow-400 px-2 transition-opacity duration-1000 ${city === 'Bogotá' ? 'opacity-100' : 'opacity-0'}`}>
            Bogotá
          </h1>
          
          {/* Texto de Cundinamarca */}
          <h1 className={`absolute text-sm text-black font-bold font-serif bg-yellow-400 px-2 transition-opacity duration-1000 ${city === 'Cundinamarca' ? 'opacity-100' : 'opacity-0'}`}>
            Cundinamarca
          </h1>
        </div>

      </nav>


      <div className="h-20 border border-neutral-300 py-2 mb-4 flex items-center justify-between">
        <button onClick={handlePrev} className="px-3 py-2 ml-5 bg-yellow-400 hover:bg-yellow-200 rounded-lg">
          ←
        </button>
        
        <div className="flex justify-center space-x-10">
          {marcasDeCarros
            .concat(marcasDeCarros) // Duplica el array para el comportamiento cíclico
            .slice(currentIndex, currentIndex + 10) // Muestra 10 elementos a partir del índice actual
            .map((marca, index) => (
              <div key={index} className="w-32 h-16 mx-1 flex items-center justify-center border border-gray-400 shadow-lg rounded-lg">
                <Image 
                  src={marca}
                  alt={`Marca ${index + 1}`}
                  width={70} 
                  height={70}
                  className="object-cover"
                  style={{ padding: '30px' }}
                />
              </div>
            ))}
        </div>

        <button onClick={handleNext} className="px-3 py-2 mr-5 bg-yellow-400 hover:bg-yellow-200 rounded-lg">
          →
        </button>
      </div>


      
        <div className="flex justify-center h-3/5 py-2">

          <form
            onSubmit={handleSubmit}
            className="w-3/5 h-full text-lg p-5 space-y-4 border border-neutral-300 rounded-2xl bg-formColor"
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
                {departments.map(department => (
                  <option key={department.id} value={department.name} > {department.name} </option>
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
                {cities?.map(city => (
                  <option key={city.id} value={city.name} > {city.name} </option>
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
              <label className="block w-1/2 mb-1 text-white">Correo Electrónico*</label>
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
                Autorizo el tratamiento de mis datos de acuerdo con la finalidad establecida en la <a href="https://www.minambiente.gov.co/politica-de-proteccion-de-datos-personales/" target="_blank" rel="noopener noreferrer" className="text-secFormColor">política de protección de datos personales.</a>
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

      <footer className="h-1/3 flex items-start bg-gray-800 text-white p-4">
        
        <div className="w-1/3">

          <p className="text-2xl text-center font-bold text-secFormColor my-2">Dónde estamos:</p>

          <p className="font-bold text-secFormColor">Dirección:</p>
          <p className="mb-3">Cra. 8 #7 - 26, La Candelaria, Bogotá, Cundinamarca</p>

          <p className="font-bold text-secFormColor">Teléfonos:</p>
          <p ><span className="font-bold">Venta de vehículos: </span>
            3002604549
          </p>
          <p><span className="font-bold">Servicio / Repuestos: </span>            
            3002604549
          </p>
          <p ><span className="font-bold">Call Center: </span>
            3002604549
          </p>

          <p className="font-bold text-secFormColor mt-3">Horarios de atención:</p>
          <p className="mb-3">08:00 a. m. - 04:00 p. m.</p>

        </div>



        <div className="w-1/3 space-y-2">

          <p className="text-2xl text-center font-bold text-secFormColor my-2">Canales de atención:</p>
          
          <a href="https://www.google.com/?hl=es" target="_blank" rel="noopener noreferrer" className="block text- text-center">Asesoría en linea</a>
          <a href="https://www.google.com/?hl=es" target="_blank" rel="noopener noreferrer" className="block text-white text-center">Chatbot</a>
          <a href="https://www.google.com/?hl=es" target="_blank" rel="noopener noreferrer" className="block text-white text-center">PQRSD</a>
          <p className="text-white text-center"> Linea de atención nacional </p>
          <p className="text-white text-center" style={{ marginTop: '0px' }}>01 8000 423 818 </p>

        </div>



        <div className="w-1/3 h-full">
          
          <p className="text-2xl text-center font-bold text-secFormColor my-2">Redes Sociales</p>
          
          <div className="flex justify-center space-x-4 mt-6">
            
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-3xl hover:text-blue-800 h-12 w-12" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-3xl hover:text-pink-700 h-12 w-12" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-3xl hover:text-red-800 h-12 w-12" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-600 text-3xl hover:text-green-800 h-12 w-12" />
            </a>
          </div>

        </div>
      </footer>

      <p className="font-bold font-serif text-end bg-gray-800 text-white pb-2 pr-4"> © 2024 Todos los derechos reservados </p>


      {isModalOpen && (
        <PrizeCode
          closeModal={() => setIsModalOpen(false)}
          code={code}
        />
      )}

    </div>
  );
}
