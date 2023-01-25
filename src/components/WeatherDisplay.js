import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import {
  formatTempWithUnitSystem,
  formatWindSpeedWithUnitSystem
} from "../utils/helpers";

const WeatherDisplay = ({ data, unit }) => {
  const getDisplayDate = unixDate => {
    return Date(unixDate);
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={8}>
          <Grid item>
            <h1 style={{ fontSize: 40 }}>
              {formatTempWithUnitSystem(data.main.temp, unit)}
            </h1>
          </Grid>
          <Grid item>
            <img
              src={`http://openweathermap.org/img/wn/${
                data.weather ? data.weather[0].icon : ""
              }@2x.png`}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <h2>{`${data.name}, ${data.sys.country}`}</h2>
          </Grid>
          <Grid item xs={12}>
            {formatTempWithUnitSystem(data.main.temp_max, unit)} /{" "}
            {formatTempWithUnitSystem(data.main.temp_min, unit)} Feels like{" "}
            {formatTempWithUnitSystem(data.main.feels_like, unit)}
          </Grid>
          <Grid item xs={12}>
            <h5>{getDisplayDate(data.dt)}</h5>
          </Grid>
          <Grid item xs={6}>
            Humidity: {data.main.humidity}%
          </Grid>
          <Grid container item justifyContent="flex-end" xs={6}>
            <Grid item>Pressure: {data.main.pressure}hPa</Grid>
          </Grid>
          <Grid item xs={6}>
            Wind speed: {formatWindSpeedWithUnitSystem(data.wind.speed, unit)}
          </Grid>
          <Grid container item justifyContent="flex-end" xs={6}>
            <Grid item>Cloud coverage: {data.clouds.all}%</Grid>
          </Grid>
          <Grid item xs={12}>
            Visibility: {data.visibility / 1000} km
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

WeatherDisplay.propTypes = {
  data: PropTypes.object.isRequired,
  unit: PropTypes.string.isRequired
};

export default WeatherDisplay;
