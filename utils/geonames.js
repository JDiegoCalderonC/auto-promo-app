import axios from "axios";

const GEO_NAMES_USERNAME = "jdiegocalderon"; // Reemplaza esto con tu nombre de usuario de GeoNames

export const getDepartments = async () => {
  try {
    // Departamentos
    const departmentsResponse = await axios.get(
      `http://api.geonames.org/childrenJSON?geonameId=3686110&username=${GEO_NAMES_USERNAME}`
    );
    console.log(
      "Response from GeoNames for departments:",
      departmentsResponse.data
    ); // Agregar esta línea
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

export const getCities = async (id) => {
  try {
    // Ciudades
    const citiesResponse = await axios.get(
      `http://api.geonames.org/childrenJSON?geonameId=${id}&username=${GEO_NAMES_USERNAME}`
    );
    console.log("Response from GeoNames for cities:", citiesResponse.data); // Agregar esta línea
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
