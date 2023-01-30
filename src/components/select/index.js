import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ label }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
          sx={{ minWidth: "10rem" }}
        >
          <MenuItem value={10}>Facebook</MenuItem>
          <MenuItem value={20}>Youtube</MenuItem>
          <MenuItem value={30}>Google</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
