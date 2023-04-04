import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel1.css";
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { data, multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";

const Menu = [
  {
    id: 1,
    image: "../Imgs/1.png",
    name: "Peace Education Program",
    place: "Delhi",
    redirect: "pep",
  },

  {
    id: 2,
    image: "../Imgs/2.png",
    name: "Eye Camp",
    place: "Punjab",
    redirect: "humanitarian",
  },
  {
    id: 3,
    image: "../Imgs/3.png",
    name: "Eye Camp",
    place: "Jaipur",
    redirect: "humanitarian",
  },
  {
    id: 4,
    image: "../Imgs/4.png",
    name: "Food For People",
    place: "Ranchi",
    redirect: "humanitarian",
  },
  {
    id: 5,
    image: "../Imgs/5.png",
    name: "COVID Relief Camp",
    place: "Delhi",
    redirect: "humanitarian",
  },
];

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
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
    slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  appendDots: (dots) => (
    <div style={{ backgroundColor: "white" }}>
      <ul style={{ margin: "0px", color: "#DA9532" }}> {dots} </ul>
    </div>
  ),

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
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
  ],
};

const MultiItemCarousel1 = () => {
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
  } else if (width > 769 && width <= 1825) {
    slidesToShow = 4;
  } else {
    slidesToShow = 4;
  }

  return (
    <div className="carousel">
      <div className="bg01">
        <div className="head">Initiatives</div>
        <Slider {...carouselProperties}>
          {Menu.map((curElem) => {
            const { id, image, name, place, redirect} = curElem;

            return (
              <>
                <div><NavLink to={redirect}>
                  <div className="cont">

                    <img className="multi__image" src={image} alt="" />
                    <div className="mtext">{name}</div>
                    <div className="text">{place}</div>
                  </div></NavLink>
                </div>
                <div className="colorbreak"></div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MultiItemCarousel1;
