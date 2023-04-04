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
    image: "../MG/AICTE University-Delhi.jpg",
    name: "AICTE University-Delhi",
  },

  {
    id: 2,
    image: "../MG/AICTE University-New Delhi.jpg",
    name: "AICTE University-New Delhi",
  },
  {
    id: 3,
    image: "../MG/Author Event Japan.png",
    name: "Author Event Japan",
  },
  {
    id: 4,
    image: "../MG/DU SRCC- New Delhi.jpg",
    name: "DU SRCC- New Delhi",
  },
  {
    id: 5,
    image: "../MG/DU-SRCC.jpg",
    name: "DU-SRCC",
  },
  {
    id: 6,
    image: "../MG/Education-for-Peace.jpg",
    name: "Education-for-Peace",
  },

  {
    id: 7,
    image: "../MG/IIM-Lucknow.jpg",
    name: "IIM-Lucknow",
  },
  {
    id: 8,
    image: "../MG/IIT-Delhi.jpg",
    name: "IIT-Delhi",
  },
  {
    id: 9,
    image: "../MG/Infosys-Pune.JPG",
    name: "Infosys-Pune",
  },
  {
    id: 10,
    image: "../MG/Yervada Central Jail- Pune.JPG",
    name: "Yervada Central Jail- Pune",
  },
  {
    id: 11,
    image: "../MG/ISB-Hyd.jpg",
    name: "ISB-Hyd.jpg",
  },

  {
    id: 12,
    image: "../MG/MNIT Jaipur.jpg",
    name: "MNIT Jaipur",
  },
  {
    id: 13,
    image: "../MG/NCUI-Delhi.jpg",
    name: "NCUI-Delhi",
  },
  {
    id: 14,
    image: "../MG/Public Event-New Delhi.jpg",
    name: "Public Event-New Delhi",
  },
  {
    id: 15,
    image: "../MG/Red Cross-Norway.jpg",
    name: "Red Cross-Norway",
  },
  {
    id: 16,
    image: "../MG/Save Trees Infosys- Pune.jpg",
    name: "Save Trees Infosys- Pune",
  },

  {
    id: 17,
    image: "../MG/Times-Group.jpg",
    name: "Times-Group",
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

const MultiItemCarousel01 = () => {
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
              <div className = "main5769" style={{ textAlign: 'center', marginLeft: "20px" }}>
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

export default MultiItemCarousel01;
