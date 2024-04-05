// Home.js
import "./Home.css";
import React from 'react';
import Header from '../../components/Header/Header';
import Introduction from '../../components/Introduction/Introduction';
import Testimonial from '../../components/Testimonial';
import Carousel from '../../components/carousel/carousel' ;



function Home() {
  return (
    <div>
              <Header/>
              <div className='information'><p >ABOUT</p></div>
              <Introduction/>
              < Testimonial/>
              <Carousel />
    </div> 
  );
}


export default Home;