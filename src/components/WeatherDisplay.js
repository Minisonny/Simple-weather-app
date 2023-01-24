import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import {
  formatTempWithUnitSystem,
  formatWindSpeedWithUnitSystem
} from "../utils/helpers";

const WeatherDisplay = ({ data, unit }) => {
  const getDisplayDate = unixDate => {
    const date = new Date(unixDate);

    return date.toString();
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={3}>
        <h1>{Math.round(data.main?.temp)}&deg;C</h1>
      </Grid>
      <Grid item xs={9}>
        <img
          src={`http://openweathermap.org/img/wn/${
            data.weather ? data.weather[0].icon : ""
          }@2x.png`}
        />
      </Grid>
      <Grid item xs={12}>
        <h2>{`${data.name}, ${data.sys.country}`}</h2>
      </Grid>
      <Grid item xs={12}>
        {formatTempWithUnitSystem(data.main.temp_max, unit)} /{" "}
        {formatTempWithUnitSystem(data.main.temp_min, unit)} Feels like{" "}
        {formatTempWithUnitSystem(data.main.feels_like, unit)}
      </Grid>
      <Grid item xs={12}>
        {getDisplayDate(data.dt)}
      </Grid>
      <Grid item xs={12}>
        Humidity: {data.main.humidity}%
      </Grid>
      <Grid item xs={12}>
        Pressure: {data.main.pressure}hPa
      </Grid>
      <Grid item xs={12}>
        Wind speed: {formatWindSpeedWithUnitSystem(data.wind.speed, unit)}
      </Grid>
      <Grid item xs={12}>
        Cloud coverage: {data.clouds.all}%
      </Grid>
      <Grid item xs={12}>
        Visibility: {data.visibility / 1000} km
      </Grid>
    </Grid>
  );
};

WeatherDisplay.propTypes = {
  data: PropTypes.object.isRequired,
  unit: PropTypes.string.isRequired
};

export default WeatherDisplay;
