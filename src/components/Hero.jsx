import React from 'react';
import './Hero.css';
import {pillow} from '../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='image'>
              <div className='bg-img'>
                <img src={pillow}/>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='paragraph'>
              <p>Started from $10</p>
              <h1>Printed memory foam brief modern therow pillow case</h1>
              <Link to='/explore'>
              <div className='link-btn'>
                <span className='btn'>
                  <p>Explore Now</p>
                </span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero