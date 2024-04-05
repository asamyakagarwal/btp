import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./carousel.css";
import Image1 from "../../assets/Image1.jpg";
import Image2 from "../../assets/Image2.jpg";
import Image3 from "../../assets/Image3.jpg";
import Image4 from "../../assets/Image4.jpg";
import Image5 from "../../assets/Image5.jpg";
import Image6 from "../../assets/Image6.jpg";
import Image7 from "../../assets/image7.jpg";

const Carousel = () => {
  const navigation = useNavigate();

  return (
    <div className='logos'>
      <div className="logos-slide">
        <img onClick={()=> navigation("/types")} src={Image1} alt="Logo 1" />
        <img onClick={()=> navigation("/types")} src={Image2} alt="Logo 2" />
        <img onClick={()=> navigation("/types")} src={Image3} alt="Logo 3" />
        <img onClick={()=> navigation("/types")} src={Image4} alt="Logo 4" />
        <img onClick={()=> navigation("/types")} src={Image5} alt="Logo 5" />
        <img onClick={()=> navigation("/types")} src={Image6} alt="Logo 6" />
        <img onClick={()=> navigation("/types")} src={Image7} alt="Logo 7" />
      </div>

      <div className="logos-slide">
        <img onClick={()=> navigation("/types")} src={Image1} alt="Logo 1" />
        <img onClick={()=> navigation("/types")} src={Image2} alt="Logo 2" />
        <img onClick={()=> navigation("/types")} src={Image3} alt="Logo 3" />
        <img onClick={()=> navigation("/types")} src={Image4} alt="Logo 4" />
        <img onClick={()=> navigation("/types")} src={Image5} alt="Logo 5" />
        <img onClick={()=> navigation("/types")} src={Image6} alt="Logo 6" />
        <img onClick={()=> navigation("/types")} src={Image7} alt="Logo 7" />
      </div>
    </div>
  )
}

export default Carousel;
