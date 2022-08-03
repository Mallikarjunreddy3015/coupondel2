import React from "react";
import "./Footer.css";
import icon from "../../icons/footer-logo-icon-white.png";
const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="footer-main">
          <img src={icon} alt="icon" />
          <div className="footer-links">
            <div className="social-Media">
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </div>
            <ul>
              <li>About</li>
          
            </ul>
            <ul>
              <li>Contact</li>
              
            </ul>
            <ul>
              <li>Policy</li>
            
            </ul>
            <ul>
              <li>More</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>All righs reserved  &copy; CouponDel {year}</p>
      </div>
    </>
  );
};

export default Footer;
