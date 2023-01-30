import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


function calculateValue(value) {
  return value;
}

export default function NonLinearSlider() {
  const [value, setValue] = React.useState(20000);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 600 }}>
      <Slider
        value={value}
        min={100}
        step={1}
        max={100000}
        scale={calculateValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
