import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data, multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import axios from '../../services/apiService';

// utility functions
function formatDateTime(dateTimeString) {
  const myDateTime = new Date(dateTimeString);
  const formattedDateTime = myDateTime.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC'
  }).replace(/(\d+)\/(\d+)\/(\d+)/, "$2-$1-$3"); // replace slashes with hyphens
  return formattedDateTime;
}



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
    <div style={{ backgroundColor: 'transparent' }}>
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
const MultiItemCarousel2 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [events, setEvents] = useState([]);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events/');
        setEvents(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={{ margin: "20px" }} className="carousel">
      <div className="headings">
        <div className="h2">Events</div>
        <div className="h3">
          Get complete information on exciting events from RVK
        </div>
      </div>
      <Slider {...carouselProperties}>
        {events.map((item) => (
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
          className="multi__image001"
          src={item.event_image}
          alt=""
          style={{
            width: "100%",
            height: "340px",
            marginBottom: "10px",
          }}
        />
        <div className="cardd">
          <div className="c2">
            <div className="r1">
              <GoLocation style={{ color: "orange" }} /> {item.location}
            </div>
            <div className="r2">
              <AiOutlineClockCircle size={13} style={{ color: "orange" }} />
              {formatDateTime(item.start)} 
            </div>
          </div>
          <div className="name">  {item.name} </div>
          <NavLink  to={`/event/${item.id}/details`}><div className="join">Join with us <BsArrowRight size={16}/> </div></NavLink>

          </div>
      </div>
    </div>
  );
};

export default MultiItemCarousel2;
