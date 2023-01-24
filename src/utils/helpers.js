export const formatTempWithUnitSystem = (temp, unitSystem) => {
  const unit = unitSystem === "metric" ? "\u00b0C" : "\u00b0F";
  const roundedTemp = Math.round(temp);

  return `${roundedTemp}${unit}`;
};

export const formatWindSpeedWithUnitSystem = (speed, unitSystem) => {
  const unit = unitSystem === "metric" ? "m/s" : "mph";
  return `${speed}${unit}`;
};
