import React from "react";
import CodingCarousel from "../components/CodingCarousel";

function Coding(props) {
  return (
    <>
      <div className="flex-container">
        <div className="box">
          <h2>Coding</h2>
          <p className="ta">
            These are some apps that I've made! Use the arrows to see other projects!
          </p>
          <CodingCarousel />
        </div>
      </div>
    </>
  );
}

export default Coding;
