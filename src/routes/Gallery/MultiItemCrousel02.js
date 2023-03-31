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
    image: "../Glimpses/Aabhar-New Delhi.jpg",
    name: "Aabhar-New Delhi",
  },

  {
    id: 2,
    image: "../Glimpses/Author Event-Mumbai.jpg",
    name: "Author Event-Mumbai",
  },
  {
    id: 3,
    image: "../Glimpses/Event-Mirzapur.jpg",
    name: "Event-Mirzapur",
  },
  {
    id: 4,
    image: "../Glimpses/Event-New Delhi.jpg",
    name: "Event-New Delhi",
  },
  {
    id: 5,
    image: "../Glimpses/Hanj Jayanti-New Delhi.jpg",
    name: "Hanj Jayanti-New Delhi",
  },
  {
    id: 6,
    image: "../Glimpses/Happy Faces-Jaipur.jpg",
    name: "Happy Faces-Jaipur",
  },

  {
    id: 7,
    image: "../Glimpses/Happy Faces-New Delhi.jpg",
    name: "Happy Faces-New Delhi",
  },
  {
    id: 8,
    image: "../Glimpses/Hear Yourself Event-New Delhi.jpg",
    name: "Hear Yourself Event-New Delhi",
  },
  {
    id: 9,
    image: "../Glimpses/Huge Crowd-Greater NOIDA.jpg",
    name: "Huge Crowd-Greater NOIDA",
  },
  {
    id: 10,
    image: "../Glimpses/Live Event-Lucknow.jpg",
    name: "Live Event-Lucknow",
  },
  {
    id: 11,
    image: "../Glimpses/Live Event-New Delhi.jpg",
    name: "Live Event-New Delhi",
  },

  {
    id: 12,
    image: "../Glimpses/Madan Gopal- New Delhi.jpg",
    name: "Madan Gopal- New Delhi",
  },
  {
    id: 13,
    image: "../Glimpses/People in Mirzapur.jpg",
    name: "People in Mirzapur",
  },
  {
    id: 14,
    image: "../Glimpses/People of Rajasthan-Jaipur.jpg",
    name: "People of Rajasthan-Jaipur",
  },
  {
    id: 15,
    image: "../Glimpses/Prerna-Jaipur.jpg",
    name: "Prerna-Jaipur",
  },
  {
    id: 16,
    image: "../Glimpses/RVK Jaipur.jpg",
    name: "RVK Jaipur",
  },

  {
    id: 17,
    image: "../Glimpses/RVK Mirzapur.jpg",
    name: "RVK Mirzapur",
  },
  {
    id: 18,
    image: "../Glimpses/SRCC-New Delhi.jpg",
    name: "SRCC-New Delhi",
  },

  {
    id: 19,
    image: "../Glimpses/Vibhor-Mirzapur.jpg",
    name: "Vibhor-Mirzapur",
  },
];


let slidesToShow = 5;

const carouselProperties = {
 dots: true,
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

const MultiItemCarousel02 = () => {
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
              <div className = "main5769" style={{ textAlign: 'center',marginLeft: "35px" }}>
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

export default MultiItemCarousel02;
