import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import niagaraFalls from "../assets/images/Niagara Falls,Fireworks, NY lowres.jpg";
import interstateMagic from "../assets/images/i90 time exposure lowres.jpg";
import soccerPic from "../assets/images/Joes Soccer pic low res.jpg";
import vette from "../assets/images/franks vette vette.jpg";
import sadie from "../assets/images/_VJP2801site.jpg";
import confOne from "..//assets/images/JOP_5573.jpg";
import confTwo from "..//assets/images/VJP_9519.jpg";

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
        <SplideSlide>
          <img src={niagaraFalls} className="img" alt="niagarafalls" />
          Niagara Falls, 2017
        </SplideSlide>
        <SplideSlide>
          <img src={interstateMagic} className="img" alt="i90" />
          I-90 Time Exposure
        </SplideSlide>
        <SplideSlide>
          <img src={vette} className="img" alt="corvette" />
          <img src={sadie} className="img" alt="impreza" />
          Car Photography
        </SplideSlide>
        <SplideSlide>
          <img src={soccerPic} className="img" alt="soccer" />
          Sports Photography
        </SplideSlide>
        <SplideSlide>
          <img src={confOne} className="img" alt="group speakers at a conference" />
          Conference Photography
        </SplideSlide>
        <SplideSlide>
          <img src={confTwo} className="img" alt="group of people at an event" />
          Event Photography
        </SplideSlide>
      </Splide>
    </div>
  );
};
