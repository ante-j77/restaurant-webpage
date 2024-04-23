import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import welcome from "../../assets/welcome.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper-info">
        <SubHeading title="chase the new flavor" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
          aliquam illo nam corporis voluptate! Nam, fuga. Mollitia delectus
          corporis ab veritatis, perferendis.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper-img">
        <img src={welcome} alt="header-img" />
      </div>
    </div>
  );
};

export default Header;
