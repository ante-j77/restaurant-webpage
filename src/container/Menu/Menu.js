import React, { useEffect, useState } from "react";
import { data } from "../../constants";
import "./Menu.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import MenuItem from "../../components/MenuItem/MenuItem";
import "animate.css";

const Menu = () => {
  const [index, setIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(index);

  const menuItems = [
    data.wines,
    data.beers,
    data.cocktails,
    data.appetizers,
    data.mainCourses,
    data.desserts,
  ];

  useEffect(() => {
    const images = menuItems.map((menuItem) => menuItem.image);
    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map((src) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error pre-loading images:", error);
      }
    };

    preloadImages();
  }, []);

  const showCurrentMenu = () => {
    const { image, menuTitle, items } = menuItems[index];

    let animationClass;
    if (animationDirection === "left") {
      animationClass = "animate__animated animate__fadeInRight";
    } else if (animationDirection === "right") {
      animationClass = "animate__animated animate__fadeInLeft";
    }
    return (
      <div className={`app__menu-items ${animationClass}`}>
        <div className="app__menu-product">
          <p className="app__menu-heading">{menuTitle}</p>
          {items.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
        <div className="app__menu-img">
          <img src={image} alt={menuTitle} />
        </div>
      </div>
    );
  };

  const checkNumber = (number) => {
    if (number > menuItems.length - 1) {
      return 0;
    }
    if (number < 0) {
      return menuItems.length - 1;
    }
    return number;
  };

  const nextMenu = () => {
    setAnimationDirection("left");
    setIndex((index) => checkNumber(index + 1));
  };

  const prevMenu = () => {
    setAnimationDirection("right");
    setIndex((index) => checkNumber(index - 1));
  };

  const animationEnd = () => {
    setAnimationDirection(index);
  };

  return (
    <div className="app__menu flex__center section__padding " id="menu">
      <div className="app__menu-title">
        <SubHeading title="menu that fits your palette" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__menu-content" onAnimationEnd={animationEnd}>
        {showCurrentMenu()}
      </div>
      <div className="app__menu-buttons">
        <BsArrowLeftShort className="app__menu-arrow_icon" onClick={prevMenu} />

        <BsArrowRightShort
          className="app__menu-arrow_icon"
          onClick={nextMenu}
        />
      </div>
    </div>
  );
};

export default Menu;
