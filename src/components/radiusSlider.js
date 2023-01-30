import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function calculateValue(value) {
  return value;
}

function valueLabelFormat(value) {
  return `${value} Km`;
}

export default function NonLinearSlider() {
  const [value, setValue] = React.useState(24);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 600 }}>
      <Slider
        value={value}
        min={1}
        step={1}
        max={30}
        scale={calculateValue}
        onChange={handleChange}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
