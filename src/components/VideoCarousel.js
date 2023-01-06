import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide").mount();
});

// this is a carousel for photo and video use
export default () => {
  return (
    <div className="slider">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          width: 800,
          gap: "1rem",
        }}
      >
        {/* reel */}
        <SplideSlide className="video">
          <div className="vidcontainer">
            <iframe
              src="https://www.youtube.com/embed/-oDVs7gYUNk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SplideSlide>
        {/* wedding long */}
        <SplideSlide className="video">
          <div className="vidcontainer">
            <iframe
              src="https://www.youtube.com/embed/3JF8mRbbuaI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SplideSlide>
        {/* keyla italy */}
        <SplideSlide className="video">
          <div className="vidcontainer">
            <iframe
              src="https://www.youtube.com/embed/ghfJ-ctEhlQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SplideSlide>
        {/* kelly italy */}

        {/* everblades */}
        <SplideSlide className="video">
          <div className="vidcontainer">
            <iframe
              src="https://www.youtube.com/embed/IWyWHCiIJm4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SplideSlide>
        {/* kelly italy */}
        <SplideSlide className="video">
          <div className="vidcontainer">
            <iframe
              src="https://www.youtube.com/embed/JHlhM7nTsNc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SplideSlide>
        {/* Mag mile */}
        <SplideSlide>
          <div className="vidcontainer">
            <iframe
              src="https://www.youtube.com/embed/PqvTlPPd8Zg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SplideSlide>
        {/* cork at park */}
        <SplideSlide>
          <div className="vidcontainer">
            <iframe
              src="https://www.youtube.com/embed/sKwBCZCXQsA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SplideSlide>
        {/* cork parade */}
        <SplideSlide>
          <div className="vidcontainer">
            <iframe
              src="https://www.youtube.com/embed/sLA-ioV1PBQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};
