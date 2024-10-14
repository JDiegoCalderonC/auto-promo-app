import axios from "axios";

// Nombre de usuario para acceder a la API de GeoNames
const GEO_NAMES_USERNAME = "jdiegocalderon";

/**
 * Obtiene una lista de departamentos desde la API de GeoNames.
 * 
 * @returns {Promise<Array>} - Una promesa que resuelve en un array de objetos
 *                              que contienen el nombre y el ID de cada departamento.
 */
export const getDepartments = async () => {
  try {
    // Realiza la solicitud a la API para obtener los departamentos
    const departmentsResponse = await axios.get(
      `http://api.geonames.org/childrenJSON?geonameId=3686110&username=${GEO_NAMES_USERNAME}`
    );
    
    // Mapea la respuesta para extraer el nombre y el ID de cada departamento
    const departments = departmentsResponse.data.geonames.map((department) => ({
      name: department.name,
      id: department.geonameId,
    }));

    return departments;
  } catch (error) {
    
    console.error("Error fetching data departments from GeoNames:", error);
    return [];
  }
};

/**
 * Obtiene una lista de ciudades para un departamento específico desde la API de GeoNames.
 * 
 * @param {string} id - El ID del departamento para el que se desean obtener las ciudades.
 * @returns {Promise<Array>} - Una promesa que resuelve en un array de objetos
 *                              que contienen el nombre y el ID de cada ciudad.
 */
export const getCities = async (id) => {
  try {
    // Realiza la solicitud a la API para obtener las ciudades del departamento especificado
    const citiesResponse = await axios.get(
      `http://api.geonames.org/childrenJSON?geonameId=${id}&username=${GEO_NAMES_USERNAME}`
    );
    
    // Mapea la respuesta para extraer el nombre y el ID de cada ciudad
    const cities = citiesResponse.data.geonames?.map((city) => ({
      name: city.name,
      id: city.geonameId,
    }));

    return cities;
  } catch (error) {
    
    console.error("Error fetching data cities from GeoNames:", error);
    return [];
  }
};
