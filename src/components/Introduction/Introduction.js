import React from 'react'
import secImg from '../../assets/Image1.jpg';
import './Introduction.css' ;


const Introduction = () => {
  return (
    <div className='information'>
        <div className='info'>
            <p>paragraph </p>
            <img src={secImg} alt="imagee" />
        </div>

        <div className='info'>
            <img src={secImg} alt="imagee" />
            <p>paragraph </p>
          
        </div>

        <div className='info'>
            <p>paragraph </p>
            <img src={secImg} alt="imagee" />
        </div>
    </div>
  )
}

export default Introduction