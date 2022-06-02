import React from "react";
import Carousel from "../components/Carousel";

function Photos(props) {
  return (
    <>
      <div className="flex-container">
        <div className="box">
          <h2>Photography</h2>
          <p className="ta">
            This is a brief exhibition of photos that I have taken throughout the years! Use the
            arrows to navigate!
          </p>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Photos;
