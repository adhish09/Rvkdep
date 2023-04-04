import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { multiData } from './data01';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = [


  {
    id: 1,
    image: "../Radio/AIR-Guwhati.jpg",
    name: "AIR-Guwhati",
  },

  {
    id: 2,
    image: "../Radio/Radio-Pune.jpg",
    name: "Radio-Pune",
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
          <ArrowBackIos style={{ color: '#a5a5a5', fontSize: '30px' }} />
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
          <ArrowForwardIos style={{ color: '#a5a5a5', fontSize: '30px' , marginRight: '-15px'}} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
    slidesToShow: 5,
  slidesToScroll: 3,
  infinite: false,
  appendDots: (dots) => (
    <div style={{ backgroundColor: 'rgb(241,241,241)' }}>
      <ul style={{ margin: "0px", color: "#DA9532" }}> {dots} </ul>
    </div>
  ),

  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 576,
      settings: {

        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 869,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 4,
        centerMode: false,
      },
    },


  ],
};

const MultiItemCarousel04 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="carousel">
        <Slider {...carouselProperties}>
          {Menu.map((curElem) => {
            const { id, image, name, place } = curElem;

            return (
              <>
              <div className = "main5769" style={{ textAlign: 'center',marginLeft: "20px" }}>
              <NavLink to = ""><img
                className='multi__image784'
                src={image}
                alt=''
              /></NavLink>
              <p className="gallerycont"><h3>{name}</h3></p>
              <br/>
            </div>
              </>
            );
          })}
        </Slider>
    </div>
  );
};

export default MultiItemCarousel04;
