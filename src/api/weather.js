import axios from "axios";

// SHOULD BE STORED IN ENV VAR INSTEAD
const API_KEY = "1cb6ace31e50401f28b864f0b23fdc68";

export const searchWeather = async (query, unit = "metric") => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/find?q=${query}&appid=${API_KEY}&units=${unit}`
  );
  return response.data.list || [];
};

export const getWeather = async (id, unit = "metric") => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=${unit}`
  );
  return response.data;
};
