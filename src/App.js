import React, { useState } from "react";
import { getWeather } from "./api/weather";
import LocationSelector from "./components/LocationSelector";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [displayData, setDisplayData] = useState({});
  const [selectDialogOpen, setSelectDialogOpen] = useState(false);

  const handleSearch = async query => {
    if (!query || query === "") return;

    const data = await getWeather(query);

    setWeatherData(data);

    if (data.length > 0) {
      setSelectDialogOpen(true);
    }
  };

  const handleSelectLocation = selectedData => {
    if (selectedData) {
      setDisplayData(selectedData);
    }

    setSelectDialogOpen(false);
  };

  return (
    <div>
      <SearchBar
        suggestions={weatherData.map(data => data.name)}
        onSearch={handleSearch}
      />
      <img
        src={`http://openweathermap.org/img/wn/${
          displayData.weather ? displayData.weather[0].icon : ""
        }@2x.png`}
      />
      <div>{displayData.main?.temp}&deg;C</div>
      <LocationSelector
        open={selectDialogOpen}
        weatherData={weatherData}
        handleSelect={handleSelectLocation}
      />
    </div>
  );
};

export default App;
