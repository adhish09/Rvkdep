import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Slider from "../components/ImgSlide/Slider";
import MultiItemCarousel from "../components/LatestVideo/MultiItemCrousel";
import LVSlider from "../components/LatestVideo/LVSlider";
import MultiItemCarousel1 from "../components/Initiative/MultiItemCrousel";
import MultiItemCarousel2 from "../components/Events/MultiItemCrousel";
import i16n from "../i18n";
import {useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import i18n from "../i18n";
import Text from "../components/Text/Text";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import "./Navbar01.css";
import ScrollTrigger from 'react-scroll-trigger';
import { Link } from "react-router-dom";
function Home() {
  const [counterOn, setCounterOn] = useState(false);
  const [click, setClick] = useState(false);
  const location = useLocation();
  const [visitorCount, setVisitorCount] = useState(80);
  const isMobile = window.innerWidth < 900;
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { t, i18n } = useTranslation();
  


  const increaseVisitorCount = () => {
    setVisitorCount(prevCount => prevCount + 1);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      increaseVisitorCount();
    },1 * 60 * 1000); // 24 hours in milliseconds
  
    // Cleanup the timer on unmount or if the visitor count changes
    return () => {
      clearTimeout(timer);
    };
  }, [visitorCount]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on navigation
  }, [location.pathname]);


  return (
    <div className="scroll">
    <div className="countermain">
      <div>
        <Slider />
      </div>
      {isMobile ? null : (
        <div className="live"  >
          <div className="livedata">
            <div className="phase1">
              <p className="m">
                <ScrollTrigger style={{ marginBottom: '-15px' }} onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  <div>
                    {counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}M+
                  </div>
                </ScrollTrigger>                <br />
                <div className="lined"></div>
              </p>
              <p className="mtext">{t('People')}</p>
            </div>
            <div className="phase2">
              <div className="phase2text">
                <p className="m">
                  <ScrollTrigger style={{ marginBottom: '-15px' }} onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div>
                    {visitorCount}K+
                    </div>
                  </ScrollTrigger>                   <br />
                  <div className="lined"></div>
                </p>
                <p className="mtext">{t('Visitor')}</p>
              </div>
            </div>
            <div className="phase3">
              <div className="arrowclass">
                <Link to="/rvk" className="arrowclass" onClick={() => window.scrollTo(0, 0)}>
                  <div className="arrowclass1">{t('Know')} </div>
                  <div className="arrowclass2">
                    <BsArrowRight
                      size={45}
                      style={{ paddingTop: "7px",color:'white' }}
                      className="arrow"
                    />
                  </div>
                  </Link>
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
        <div className="break"></div>
        <MultiItemCarousel2 />
        <div className="break"></div>
        <MultiItemCarousel1 />

      </div>
    </div>
    </div>
  );
}

export default Home;
