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
    image: "../TV/AICTE--New-Delhi.jpg",
    name: "AICTE-New-Delhi",
  },

  {
    id: 2,
    image: "../TV/DD National-New Delhi.jpg",
    name: "DD National-New Delhi",
  },
  {
    id: 3,
    image: "../TV/DD-TV-New-Delhi.jpg",
    name: "DD-TV-New-Delhi",
  },
  {
    id: 4,
    image: "../TV/Fireside with bhusan Dahal- Nepal.jpg",
    name: "Fireside with bhusan Dahal- Nepal",
  },
  {
    id: 5,
    image: "../TV/Media-Interview.jpg",
    name: "Media-Interview",
  },
  {
    id: 6,
    image: "../TV/Mumbai-Author-Event.jpg",
    name: "Mumbai-Author-Event",
  },

  {
    id: 7,
    image: "../TV/News-24--Greater-NOIDA.jpg",
    name: "News-24-Greater-NOIDA",
  },
  {
    id: 8,
    image: "../TV/PTC-Punjabi--New-Delhi.jpg",
    name: "PTC-Punjabi-New-Delhi",
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
  nextArrow: <NextBtn />,  slidesToShow: 5,
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

const MultiItemCarousel03 = () => {
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

export default MultiItemCarousel03;
