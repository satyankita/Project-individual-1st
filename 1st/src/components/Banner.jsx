import React, { useEffect, useState } from "react";
import "../styles/Banner.css";

function Banner() {

  const banners = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg",
    "/banner5.jpg",
    "/banner6.jpg",
    "/banner7.jpg",
    "/banner8.jpg",
    "/banner9.jpg",
    "/banner10.jpg",
  ];

  const [current, setCurrent] = useState(0);

  

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev >= banners.length - 2 ? 0 : prev + 1
      );

    }, 2500);

    return () => clearInterval(interval);

  }, [banners.length]);

  return (

    <div className="slider-container">

      <div
        className="slider-track"
        style={{
          transform: `translateX(-${current * 50}%)`,
        }}
      >

        {banners.map((item, index) => (

          <div className="slide" key={index}>

            <img
              src={item}
              alt="banner"
            />

          </div>

        ))}

      </div>

      <div className="dots">

        {banners.slice(0, banners.length - 1).map((_, index) => (

          <span
            key={index}
            className={
              current === index
                ? "dot active"
                : "dot"
            }
          ></span>

        ))}

      </div>

    </div>
  );
}

export default Banner;