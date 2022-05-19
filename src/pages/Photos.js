import React from "react";
import niagaraFalls from "../assets/images/Niagara Falls,Fireworks, NY lowres.jpg";
import Carousel from "../components/Carousel";

function Photos(props) {
  return (
    <>
      <div class="box flex-container">
        <h2>About Me</h2>
        <h3 class="ta">
          This is a brief exhibition of photos that I have taken throughout the years! Use the
          arrows to navigate!
        </h3>
      </div>
      <Carousel />
    </>
  );
}

export default Photos;
