import React from "react";
import "./pricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const Pricing = () => {
  return (
    <section className="sec">
      <div className="title">
        <h1>Our Pricing</h1>
        <p>We are a good campany for this sceregfg</p>
      </div>
      <div className="wrapper">
        <div className="package">
          <div className="name">Limited</div>
          <div className="price">€2</div>
          <div className="trial">Available for a month</div>
          <hr />
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              <strong>8</strong>
              team members
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              <strong>6</strong>
              team playlists
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              <strong>Unlimited</strong>
              public playlists
            </li>
          </ul>
        </div>
        <div className="package brilliant">
          <div className="name">Brilliant</div>
          <div className="price">€5</div>
          <div className="trial">Free 30 day trial</div>
          <hr />
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              <strong>Unlimited</strong>
              team members
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              <strong>Unlimited</strong>
              team playlists
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              <strong>Unlimited</strong>
              public playlists
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              Team analytics
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              Send files
            </li>
          </ul>
        </div>
        <div className="package">
          <div className="name">Basic</div>
          <div className="price">€0</div>
          <div className="trial">Totally free</div>
          <hr />
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              <strong>5</strong>
              team members
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              <strong>3</strong>
              team playlists
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="iconic" />
              <strong>Unlimited</strong>
              public playlists
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
