import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import Image2 from "../assets/Image2.jpg" ;
import Image3 from "../assets/Image3.jpg" ;
import Image1 from "../assets/Image1.jpg" ;

const CarouselPage = () => {
  return (
    

    <Carousel className="carousel-container">
    <div className="carousel-item">
      <img src={Image1} alt="Legend 1" />
      <p className="legend">Legend 1</p>
    </div>
    <div className="carousel-item">
      <img src={Image3} alt="Legend 2" />
      <p className="legend">Legend 2</p>
    </div>
    <div className="carousel-item">
      <img src={Image2} alt="Legend 3" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
  
  );
};

export default CarouselPage;
