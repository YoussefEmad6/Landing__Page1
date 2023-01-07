import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faAsterisk,
  faHands,
} from "@fortawesome/free-solid-svg-icons";
import Heroimage from "../../assests/16692663_5767931.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">online business</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
              Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
              laboriosam eos praesentium veritatis!
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <i>
                  <FontAwesomeIcon icon={faDatabase} /> Staxx
                </i>
                <i>
                  <FontAwesomeIcon icon={faAsterisk} /> Star AI
                </i>
                <i>
                  <FontAwesomeIcon icon={faHands} /> Accusoft
                </i>
                <i></i>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={Heroimage} alt="image"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
