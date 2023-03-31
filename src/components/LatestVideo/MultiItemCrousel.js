import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import YoutubeEmbed from './YoutubeEmbed';
import { multiData } from './data';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';

const videos = [
  {
    embedUrl: 'fLo7a-GLLCE',
  },
  {
    embedUrl: 'LALIZYKqUzg',
  },
  {
    embedUrl: 'EQdZ54ZdZtA',
  },
  {
    embedUrl: 'NQukm8xz1Ws',
  },
  {
    embedUrl: 'myT1HIO8rAU',
  },
  {
    embedUrl: '6SoqXdY89_o',
  },
  {
    embedUrl: 'Zk5ZzDeYO7A',
  },
  {
    embedUrl: 'ou2Gd8qeFKI',
  },
  {
    embedUrl: '033RuAXlhWk',
  },
  {
    embedUrl: '0H2Tm59BcSw',
  },
  {
    embedUrl: 'hbd_MRSb-p0',
  },
  {
    embedUrl: '-t3Jxx_aiW8',
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
          <ArrowForwardIos style={{ color: '#a5a5a5', fontSize: '30px' }} />
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
  swipeToSlide: true,
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
      breakpoint: 1630,
      settings: {
        slidesToShow: 4,
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


  return (
    <div  className='carousel'>
      <Slider {...carouselProperties}>
        {videos.map((video) => (


          <Card video={video} />


        ))}
      </Slider>
    </div>
  );
};

const Card = ({ video }) => {
  return (
    <>
    <div className = "main" style={{ textAlign: 'center' }}>
    <div className='multi__image'>
    <YoutubeEmbed embedId={video.embedUrl} style={{
      width: "90%",
      height: "340px",
      marginBottom: "10px",
    }}/>

    </div>    </div>
    </>
  );
};

export default MultiItemCarousel;
