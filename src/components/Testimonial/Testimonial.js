import React from 'react';
import Image2 from "../../assets/test1.jpeg" ;
import Image3 from "../../assets/test2.jpeg" ;
import Image1 from "../../assets/test3.jpeg" ;
import Image4 from "../../assets/test4.jpeg" ;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { IoMdArrowBack , IoMdArrowForward  } from "react-icons/io";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoMdArrowBack style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoMdArrowForward  style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div className='division'>
        <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>THE GREATS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>

          <Card img= {Image1} info = {" “It is not worth my while to manufacture in three countries only; but I can find it very worthwhile to make it for the whole world.”"} name ={"Kate Gleason"} work = {"American engineer and businesswoman"} />

          <Card img={Image2} info ={"“The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.”"} name ={"James Watt"} work = {"Mechanical Engineer"}/>

          <Card img={Image3} info = {"“What you call freedom is still nothing but choosing how to steer straight into the heart of what chooses you”"} name = {"Nikola Tesla"} work = {"Scientist"}/>


          <Card img={Image4} info = {"“My vision is a future for humanity where we will be completely free to pursue activities outside of our planet”"} name = {"Franklin Chang Diaz"} work = {"Physicist And Astronaut"}/>


        </Slider>
      </div>
    </div>
    </div> 
  );
};

const Card = ({ img, info, name, work }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "#663300",
        fontSize: "20px"
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          borderRadius: "50%",
          marginBottom: 20,
        }}
      />
      <p>{info}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span>, {work}
      </p>
    </div>
  );
};


export default Testimonial;
