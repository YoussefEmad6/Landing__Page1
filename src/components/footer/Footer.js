import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col solutions">
          <h6>Solutions</h6>
          {/* <ul>
            <li>
              <a href="#" className="link">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Commerce
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Insights
              </a>
            </li>
          </ul>
        </div>
        <div className="col support">
          <h6>Support</h6>
          <ul>
            <li>
              <a href="#" className="link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="link">
                API Status
              </a>
            </li>
          </ul>
        </div>
        <div className="col company">
          <h6>Company</h6>
          <ul>
            <li>
              <a href="#" className="link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Jops
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div className="col legal">
          <h6>Legal</h6>
          <ul>
            <li>
              <a href="#" className="link">
                Claim
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Cookies
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Terms
              </a>
            </li>
          </ul> */}
        </div>
        <div className="col-subscribe">
          <h6>Subscribe to our newsletter</h6>
          <p>
            The latest news, articles, and resources sent to your inbox weekly.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="content">
          <div className="rights">
            <p>&copy; Workflow, Inc. All rights reserved.</p>
          </div>
          {/* <div>
            <FaFacebook
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaInstagram
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
