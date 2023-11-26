import React from "react";
import Slider from "@mui/material/Slider";
const PriceSlider = () => {
  const [range, setRange] = React.useState([5, 40]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <>
      <div>
        <Slider
          value={range}
          onChange={handleChanges}
          valueLabelDisplay="auto"
        />
        The selected range is {range[0]} - {range[1]}
      </div>
    </>
  );
};

export default PriceSlider;
