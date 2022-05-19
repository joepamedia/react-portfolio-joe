import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import umbrella from "../assets/images/douneedumbrella.jpg";
import noteTaker from "../assets/images/notetakerSS.jpg";
import petrolPirate from "../assets/images/petrolpirate.jpg";
import blog from "../assets/images/tech-blogSS.jpg";
import weather from "../assets/images/weatherdashboard.jpg";

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
          <p className="ta-g">Do You Need An Umbrella?</p>
          <a href="https://the-camelcasers.github.io/project/" target="_blank">
            <img src={umbrella} className="img" alt="niagarafalls" />
          </a>
          <a href="https://github.com/The-camelCasers/project" target="_blank">
            <p className="ta-sm">View the repo!</p>
          </a>
          <p className="ta-sm">Click the image to view the applications</p>
        </SplideSlide>
        <SplideSlide>
          <p className="ta-g"> Petrol Pirate </p>
          <a href="https://hbs-project-two.herokuapp.com/login" target="_blank">
            <img src={petrolPirate} className="img" alt="i90" />
          </a>
          <a href="https://github.com/TeamHBs/petrol-pirate" target="_blank">
            <p className="ta-sm">View the repo!</p>
          </a>
          <p className="ta-sm">Click the image to view the applications</p>
        </SplideSlide>
        <SplideSlide>
          <p className="ta-g"> Team Profile Viewer </p>
          <a href="https://note-taker-joepa.herokuapp.com/" target="_blank">
            <img src={noteTaker} className="img" alt="corvette" />
          </a>
          <a href="https://github.com/joepamedia/note-taker" target="_blank">
            <p className="ta-sm">View the repo!</p>
          </a>
          <p className="ta-sm">Click the image to view the applications</p>
        </SplideSlide>
        <SplideSlide>
          <p className="ta-g"> Tech Blog </p>
          <a href="https://note-taker-joepa.herokuapp.com/" target="_blank">
            <img src={blog} className="img" alt="impreza" />
          </a>
          <a href="https://github.com/joepamedia/tech-blog" target="_blank">
            <p className="ta-sm">View the repo!</p>
          </a>
          <p className="ta-sm">Click the image to view the applications</p>
        </SplideSlide>
        <SplideSlide>
          <p className="ta-g"> Weather Dashboard </p>
          <a href="https://joepamedia.github.io/weather-dashboard/" target="_blank">
            <img src={weather} className="img" alt="soccer" />
          </a>
          <a href="https://github.com/joepamedia/weather-dashboard" target="_blank">
            <p className="ta-sm">View the repo!</p>
          </a>
          <p className="ta-sm">Click the image to view the applications</p>
        </SplideSlide>
      </Splide>
    </div>
  );
};
