import React, { useRef } from "react";
import "./Gallery.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import gallery01 from "../../assets/gallery03.jpg";
import gallery02 from "../../assets/cocktail04.jpg";
import gallery03 from "../../assets/cocktail06.jpg";
import gallery04 from "../../assets/gallery02.jpg";
import gallery05 from "../../assets/gallery04.jpg";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else if (direction === "right") {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">photo gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
          tempore!
        </p>
        <button className="custom__button" type="button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[gallery01, gallery02, gallery03, gallery04, gallery05].map(
            (image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery-image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            )
          )}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />

          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
