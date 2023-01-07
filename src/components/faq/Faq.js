import React, { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
    
  };

  return (
    <div className="section-faq">
      <div className="container__faq">
        <div className="facol-1">
          <h3>Frequently asked questions</h3>
          <p>Can't find the answer you're looking for?</p>
          <p>
            Reach out to our <span className="word">customer support</span>
            team.
          </p>
        </div>
        <div className="facol-2">
          <div className="faq">
            <div className="fqa__section">
              <h5>How do you make holy water?</h5>
              <span className="click" onClick={() => toggle(1)} key={1}>
                {clicked === 1 ? (
                  <FontAwesomeIcon
                    icon={faMinus}
                    size={"xl"}
                    style={{ color: "black" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    size={"xl"}
                    style={{ color: "black" }}
                  />
                )}
              </span>
            </div>
            {clicked === 1 ? (
              <p>
                You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            ) : null}
          </div>
          <div className="faq">
            <div className="fqa__section">
              <h5>How do you make holy water?</h5>
              <span className="click" onClick={() => toggle(2)} key={2}>
                {clicked === 2 ? (
                  <FontAwesomeIcon
                    icon={faMinus}
                    size={"xl"}
                    style={{ color: "black" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    size={"xl"}
                    style={{ color: "black" }}
                  />
                )}
              </span>
            </div>
            {clicked === 2 ? (
              <p>
                You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            ) : null}
          </div>
          {/* <div className="faq">
            <h5>How do you make holy water?</h5>
            <p>
              You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="faq">
            <h5>How do you make holy water?</h5>
            <p>
              You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="faq">
            <h5>How do you make holy water?</h5>
            <p>
              You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
