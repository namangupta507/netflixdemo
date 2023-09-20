import React from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DisplayCards.css";
import Preview from "./Preview";

const items = [
  {
    id: 1,
    title: "DareDevil",
    imgsrc:
      "https://static.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time1.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    button: "Watch Now",
    link: "https://www.netflix.com/in/",
  },
  {
    id: 2,
    title: "HELLBOUND",
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BNzU1ODk0ZWUtMzdkYS00YmI2LWI1NjItOTg0NjQxNGY5MmNlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    button: "Watch Now",
    link: "https://www.netflix.com/in/",
  },
  {
    id: 3,
    title: "RIVERDALE",
    imgsrc:
      "https://i.pinimg.com/750x/04/9f/74/049f74203c52ea7bc797fa337110e8e9.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    button: "Watch Now",
    link: "https://www.netflix.com/in/",
  },
  {
    id: 4,
    title: "1899",
    imgsrc:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQeIeKt7LlqIJPKrT4aQijclj7K43xRSU3dQXNESNdNbnnJbT6LLWVRT9srUUbHbOo-iOH-8v3o16pUDMQ6tCgNGlkvfwvDOprROIZpQ2rgHtop9rHvbYlvzavMmUSGBCXjynJ80dn4nqZzZmzIUJMQpS.jpg?r=943",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    button: "Watch Now",
    link: "https://www.netflix.com/in/",
  },
  {
    id: 5,
    title: "DARK",
    imgsrc:
      "https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/poster/d/t/u/medium-dark-netflix-series-matte-finish-poster-postrwndr6202-original-imag8g9669uvygwv.jpeg?q=90",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    button: "Watch Now",
    link: "https://www.netflix.com/in/",
  },
  {
    id: 6,
    title: "BERUN",
    imgsrc:
      "https://www.tallengestore.com/cdn/shop/products/MoneyHeist-Berlin-NetflixTVShowPoster_885e831e-7666-47bc-82de-aadaf9f875ca.jpg?v=1589788998",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    button: "Watch Now",
    link: "https://www.netflix.com/in/",
  },
];

const DisplayCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slide">
          <Preview items={items[0]} />
        </div>
        <div className="slide">
          <Preview items={items[1]} />
        </div>
        <div className="slide">
          <Preview items={items[2]} />
        </div>
        <div className="slide">
          <Preview items={items[3]} />
        </div>
        <div className="slide">
          <Preview items={items[4]} />
        </div>
        <div className="slide">
          <Preview items={items[5]} />
        </div>
      </Slider>
      <div className="row vt-row">
        <div className="col-md-4 col-4 vt-column">
          <div className="vt-card">
            <Cards items={items[0]} />
          </div>
        </div>
        <div className="col-md-4 col-4 vt-column">
          <div className="vt-card">
            <Cards items={items[1]} />
          </div>
        </div>
        <div className="col-md-4 col-4 vt-column">
          <div className="vt-card">
            <Cards items={items[2]} />
          </div>
        </div>
      </div>
      <div className="row vt-row">
        <div className="col-md-4 col-4 vt-column">
          <div className="vt-card">
            <Cards items={items[3]} />
          </div>
        </div>
        <div className="col-md-4 col-4 vt-column">
          <div className="vt-card">
            <Cards items={items[4]} />
          </div>
        </div>
        <div className="col-md-4 col-4 vt-column">
          <div className="vt-card">
            <Cards items={items[5]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCards;
