import React from "react";
import NavigationTwoToneIcon from "@mui/icons-material/NavigationTwoTone";

const GoToTop = () => {
  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="toTop">
        <wrapper>
          <div className="goToTop" onClick={goTop}>
            <NavigationTwoToneIcon />
          </div>
        </wrapper>
      </div>
    </>
  );
};

export default GoToTop;
