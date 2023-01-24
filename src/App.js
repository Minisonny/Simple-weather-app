import React, { useEffect, useState } from "react";
import { getWeather, searchWeather } from "./api/weather";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import LocationSelector from "./components/LocationSelector";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [displayData, setDisplayData] = useState(null);
  const [selectDialogOpen, setSelectDialogOpen] = useState(false);
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    if (displayData) {
      getWeather(displayData.id, unit).then(data => setDisplayData(data));
    }
  }, [unit]);

  const handleSearch = async query => {
    if (!query || query === "") return;

    const data = await searchWeather(query, unit);

    setWeatherData(data);

    if (data.length > 0) {
      setSelectDialogOpen(true);
    }
  };

  const handleSelectLocation = async selectedId => {
    if (selectedId) {
      const fetchedWeatherData = await getWeather(selectedId, unit);
      setDisplayData(fetchedWeatherData);
    }

    setSelectDialogOpen(false);
  };

  return (
    <div>
      <SearchBar
        suggestions={weatherData.map(data => data.name)}
        onSearch={handleSearch}
      />
      <ToggleButtonGroup
        color="primary"
        value={unit}
        exclusive
        onChange={(_, selectedUnit) => setUnit(selectedUnit)}
        aria-label="Platform"
      >
        <ToggleButton value="metric">Metric: &deg;C, m/s </ToggleButton>
        <ToggleButton value="imperial">Imperial: &deg;F, mph</ToggleButton>
      </ToggleButtonGroup>
      {displayData && <WeatherDisplay data={displayData} unit={unit} />}
      <LocationSelector
        open={selectDialogOpen}
        weatherData={weatherData}
        handleSelect={handleSelectLocation}
        unit={unit}
      />
    </div>
  );
};

export default App;
