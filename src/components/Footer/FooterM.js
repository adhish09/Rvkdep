import React from "react";
import Logo from "./Logo.png";
import "./FooterM.css";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
function FooterM() {
  return (
    <div>
      <br />
      <div className="footermobile">
        <div className="footermainhead">Subscribe Now</div>
        <div className="footermaincont">
          Subscribe to our newsletter to get more information
        </div>
        <div className="subscribefooter9">
          <div className="footermaincont67">
            <input className="footermaincont" placeholder="Email" />
          </div>
          <div className="footermaincont978">
            <button className="footermaincont98">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="break5947"></div>

      <div className="subscribelastmain34">
        <div className="subscribelast75">
          <div className="logo853">
            <img src={Logo} />
          </div>
          <div className="logoname847">RAJ VIDYA KENDER</div>
        </div>
        <div className="footeraddress87">
          Address: Chattarpur, Chandanhula New Delhi-110074
        </div>
        <div className="subscribelast75">
          <div className="footernumber86">+91 011-3500 9190</div>
          <div className="footernumber86">Rvkender@rvk.in</div>
        </div>
        <div className="subscribelast735">
          <div className="footerlogo8347">
            <BsYoutube size={30} style={{ color: "rgb(226,195,148)" }} />
          </div>
          <div className="footer245"></div>
          <div className="footerlogo83457">
            <FaFacebookSquare size={30} style={{ color: "rgb(226,195,148)" }} />
          </div>
        </div>
        <div className="copyrightlast87">
        <div className="copyright746">
          <p>
            © Copyright {new Date().getFullYear()} Raj Vidya Kender Policy Terms
            & Conditions
          </p>
        </div></div>
      </div>
    </div>
  );
}

export default FooterM;
