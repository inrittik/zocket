import React from "react";
import { icons } from "../../utils/icons";
import "./styles.css";

const SearchBar = ({placeholder, width}) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="searchBar" style={{width: `${width}rem`}}>
      {value === "" && icons.search}
      <input
        type="text"
        name="campaign"
        id="campaign"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
