import React from "react";
import "./main.css";
import RVK from "./Logo.png";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
      <div className="logofooter">
        <div><img src={RVK} /></div>
        <div className="footername">Raj Vidya Kender</div>
        </div>
        <div className="sb_footer-links">
          <div className="sb_footer-links_main">
            <h4>Subscribe Now</h4>

            <div>Subscribe to our newsletter to get more information</div>
            <div className="input">
              <input placeholder="Email" type="email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4>Links</h4><br/>
            <a href="">
              <p>Prem Rawat</p>
            </a>
            <a href="">
              <p>Rvk products</p>
            </a>
            <a href="">
              <p>Anjan TV</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Getting involved</h4><br/>
            <a href="">
              <p>Career</p>
            </a>
            <a href="">
              <p>Events</p>
            </a>
            <a href="">
              <p>Glimpse</p>
            </a>
            <a href="">
              <p>Volunteer</p>
            </a>
            <a href="">
              <p>Contribute</p>
            </a>
            <a href="">
              <p>Humantarian</p>
            </a>
            <a href="">
              <p>Policies</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Address:</h4><br/>
            <a href="">
              <p>Chattarpur, Chandanhula, New Delhi - 110074</p>
            </a>
            <a href="">
              <p>+91 011-35009190</p>
            </a>
            <a href="">
              <p>Rvkender@rvk.in</p>
            </a>
          </div>
        </div>
        <div className="icon">
          <div className="socialmedia">
            <p>
              <BsYoutube size={25} />
            </p>
            <p>
              <FaFacebookSquare size={23} />
            </p>
          </div>
        </div>
<hr/>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              © Copyright {new Date().getFullYear()} Raj Vidya Kender Policy
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;