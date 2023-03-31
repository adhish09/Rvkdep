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

      <div className="latest">

        <Text />
        <div className="break"></div>
        <div className="latestvideo">
        <div className="lat1">Latest Videos</div>
        <LVSlider />
      </div>

        <MultiItemCarousel2 />
        <div className="break"></div>
        <MultiItemCarousel1 />
      </div>
    </div>
  );
}

export default Home;