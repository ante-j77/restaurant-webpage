import React from "react";
import spoon from "../../assets/spoon.png";

const Subheading = ({ title }) => {
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <p className="p__cormorant">{title}</p>
        <img src={spoon} alt="spoon-img" className="spoon__img" />
      </div>
    </div>
  );
};

export default Subheading;
