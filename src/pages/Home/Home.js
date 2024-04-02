// Home.js

import React from 'react';
import Header from '../../components/Header/Header';
import Introduction from '../../components/Introduction/Introduction';
import CarouselPage from '../../components/Carousel';



function Home() {
  return (
    <div>
              

              <Header/>

              <div className='information'>
                <p >INFORMATION</p>
              </div>


              <Introduction/>

              <div className='information'>
                <p >USEFULL QUOTES ABOUT MECHanchi</p>
              </div>

              < CarouselPage/>



              <div className='information'>
                <p >row 1 : where machoine is revolving </p>
              </div><div className='information'>
                <p >row 2 : where machoine is revolving </p>
              </div><div className='information'>
                <p >row 3 : where machoine is revolving </p>
              </div>


      
             


    </div>


    
  );
}

export default Home;
