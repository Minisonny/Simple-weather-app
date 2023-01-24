import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherDisplay from "./WeatherDisplay";

const DATA = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
  ],
  base: "stations",
  main: {
    temp: 274.19,
    feels_like: 274.19, //eslint-disable-line
    temp_min: 270.53, //eslint-disable-line
    temp_max: 277.01, //eslint-disable-line
    pressure: 1037,
    humidity: 88
  },
  visibility: 10000,
  wind: { speed: 1.03, deg: 360 },
  clouds: { all: 75 },
  dt: 1674601316,
  sys: {
    type: 2,
    id: 2075535,
    country: "GB",
    sunrise: 1674546627,
    sunset: 1674578053
  },
  timezone: 0,
  id: 2643743,
  name: "London",
  cod: 200
};

it("render correct information", () => {
  render(<WeatherDisplay data={DATA} unit="metric" />);

  expect(screen.getByText(/Cloud coverage: 75%/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity: 88%/i)).toBeInTheDocument();
  expect(screen.getByText(/Feels like 274/i)).toBeInTheDocument();
});
