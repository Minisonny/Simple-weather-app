import axios from "axios";

// SHOULD BE STORED IN ENV VAR INSTEAD
const API_KEY = "1cb6ace31e50401f28b864f0b23fdc68";

export const getWeather = async location => {
  return await axios.get(
    `http://api.openweathermap.org/data/2.5/find?q=${location}&appid=${API_KEY}`
  );
};

export const getIcon = async iconId => {
  return await axios.get(`http://openweathermap.org/img/wn/${iconId}@2x.png`);
};
