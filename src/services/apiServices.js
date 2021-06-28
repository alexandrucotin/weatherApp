const OPENWEATHER_API_KEY = "62fa906e7367e8a40dd766e9eb5a1d0b";
const GOOGLE_API_KEY = "AIzaSyBDP_ihyweLdxrrpNx5SIzqgGnGrNq7jZ8";

export const getOneCallWeather = async (lat, lon) => {
  const request = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`);
  const data = await request.json();
  return data;
};

export const getFullCityData = async (lat, lon) => {
  return {
    ...(await getOneCallWeather(lat, lon)),
    cityInfo: await getCityNameFromGeocoding(lat, lon)
  }
}


export const getCityNameFromGeocoding = async (lat, lon) => {
  const request = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true&key=${GOOGLE_API_KEY}`);
  const data = await request.json();
  return data;
};
