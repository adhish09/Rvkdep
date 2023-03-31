import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data, multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import {NavLink } from "react-router-dom";

let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
 dots:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,

  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
    {
      breakpoint: 869,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
  ],
};
const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 4;
  }

  return (
    <div style={{ margin: "20px" }} className="carousel">
      <div className="headings">
        <div className="h2">Old events</div>
        <div className="h3">
        Aarambh Series - 2022
        </div>
      </div>
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center", padding: "0px", margin: "20px" }}>
      <div className="eve">
        <img
          className="multi__image"
          src={item}
          alt=""
          style={{
            width: "100%",
            height: "260px",
            marginBottom: "10px",
          }}
        />
        <div className="cardd">
          <div className="c2">
            <div className="r1">
              <GoLocation style={{ color: "orange" }} /> Jaipur
            </div>
            <div className="r2">
              <AiOutlineClockCircle size={13} style={{ color: "orange" }} />
               6:00AM to 8:00AM
            </div>
          </div>
          <div className="name">Aarambh 2022</div>
          <NavLink to="bookevent"><div className="join">Join with us <BsArrowRight size={16}/> </div></NavLink>

          </div>
      </div>
    </div>
  );
};

export default MultiItemCarousel;
