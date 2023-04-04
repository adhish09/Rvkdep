import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Slider from "../components/ImgSlide/Slider";
import MultiItemCarousel from "../components/LatestVideo/MultiItemCrousel";
import LVSlider from "../components/LatestVideo/LVSlider";
import MultiItemCarousel1 from "../components/Initiative/MultiItemCrousel";
import MultiItemCarousel2 from "../components/Events/MultiItemCrousel";
import Text from "../components/Text/Text";
import { motion } from "framer-motion";

import "./Navbar01.css";
function Home() {
  const [click, setClick] = useState(false);
  const isMobile = window.innerWidth < 900;
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="countermain">
      <div>
        <Slider />
      </div>
      {isMobile ? null : (
        <div className="live">
          <div className="livedata">
            <div className="phase1">
              <p className="m">
                15M+
                <br />
                <div className="lined"></div>
              </p>
              <p className="mtext">People benefitted from this message</p>
            </div>
            <div className="phase2">
              <div className="phase2text">
                <p className="m">
                  80K+
                  <br />
                  <div className="lined"></div>
                </p>
                <p className="mtext">Visitor count</p>
              </div>
            </div>
            <div className="phase3">
              <div className="arrowclass">
                <div className="arrowclass1">Know More </div>
                <div className="arrowclass2">
                  <BsArrowRight
                    size={45}
                    style={{ paddingTop: "10px" }}
                    className="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="latest">
        <div className="latestvideo">
          <div className="lat1">Latest Videos</div>
          <MultiItemCarousel />
        </div>
        <div className="break"></div>
        <div className="break"></div>
        <Text />
         <div className="break"></div> <MultiItemCarousel2 />
        <div className="break"></div>
        <MultiItemCarousel1 />

      </div>
    </div>
  );
}

export default Home;
