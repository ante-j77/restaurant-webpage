import React from "react";
import "./AboutUs.css";
import knife from "../../assets/knife.png";
import spoon from "../../assets/spoon.png";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg section__padding  flex__center"
      id="about"
    >
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={spoon} alt="spoon-img" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            explicabo ipsum unde porro commodi deserunt in, vel nihil autem
            itaque, praesentium corporis accusamus rem magni labore quas
            voluptate cumque aliquid.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={knife} alt="img" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at
            corrupti nobis, quo nesciunt, qui error voluptates maiores beatae
            optio minima sequi? Quia, non? Est culpa maxime optio hic itaque.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
