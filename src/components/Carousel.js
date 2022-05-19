import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import niagaraFalls from "../assets/images/Niagara Falls,Fireworks, NY lowres.jpg";
import interstateMagic from "../assets/images/i90 time exposure lowres.jpg";
import soccerPic from "../assets/images/Joes Soccer pic low res.jpg";
import vette from "../assets/images/franks vette vette.jpg";
import sadie from "../assets/images/_VJP2801site.jpg";

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
        </SplideSlide>
        <SplideSlide>
          <img src={interstateMagic} className="img" alt="i90" />
        </SplideSlide>
        <SplideSlide>
          <img src={vette} className="img" alt="corvette" />
          <img src={sadie} className="img" alt="impreza" />
        </SplideSlide>
        <SplideSlide>
          <img src={soccerPic} className="img" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>

    // <Splide
    //   options={{
    //     rewind: true,
    //     gap: "1rem",
    //   }}
    //   aria-label="My Favorite Images"
    // >
    //   <SplideSlide>
    //     <img src={niagaraFalls} alt="Image 1" />
    //   </SplideSlide>
    //   <SplideSlide>
    //     <img src="image2.jpg" alt="Image 2" />
    //   </SplideSlide>
    //   <SplideSlide>
    //     <img src="image3.jpg" alt="Image 3" />
    //   </SplideSlide>
    // </Splide>
  );
};
