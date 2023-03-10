import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import { formatTempWithUnitSystem } from "../utils/helpers";

const LocationSelector = ({ open, weatherData, handleSelect, unit }) => {
  const getPrimaryText = data => {
    return `${data.name}, ${data.sys.country}`;
  };

  const getSecondaryText = data => {
    return formatTempWithUnitSystem(data.main.temp, unit);
  };

  const handleCancel = () => {
    handleSelect();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle>Select a location</DialogTitle>
      <DialogContent dividers>
        <List sx={{ pt: 0 }}>
          {weatherData.map(data => (
            <ListItem key={`list-item-${data.id}`} disableGutters>
              <ListItemButton
                onClick={() => handleSelect(data.id)}
                key={`list-item-button-${data.id}`}
              >
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                />
                <ListItemText
                  primary={getPrimaryText(data)}
                  secondary={getSecondaryText(data)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

LocationSelector.propTypes = {
  open: PropTypes.bool.isRequired,
  weatherData: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired
};

export default LocationSelector;
