import React from "react";
import "./FindUs.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import findUs from "../../assets/findus.png";

const FindUs = () => {
  return (
    <div
      className="app__findUs app__bg app__wrapper section__padding"
      id="contact"
    >
      <div className="app__wrapper-info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, illo!
          </p>

          <p className="p__opensans">Mon - Sun: 8:00 - 23:00</p>
          <button
            className="custom__button"
            type="button"
            style={{ marginTop: "2rem" }}
          >
            Visit Us
          </button>
        </div>
      </div>
      <div className="app__wrapper-img">
        <img src={findUs} alt="findUs-img" />
      </div>
    </div>
  );
};

export default FindUs;
