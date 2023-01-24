import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const onSearchButtonClick = () => {
    onSearch(searchText);
  };

  return (
    <>
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <Button variant="contained" onClick={onSearchButtonClick}>
        Search
      </Button>
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;
