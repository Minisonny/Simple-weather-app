import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField, Grid } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const onSearchButtonClick = () => {
    onSearch(searchText);
  };

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <TextField
          id="filled-search"
          label="Find location"
          type="search"
          variant="filled"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={onSearchButtonClick}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;
