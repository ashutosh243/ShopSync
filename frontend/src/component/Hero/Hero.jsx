import React from 'react'
import girl from '../asset/girl.jpg'
import './Hero.css';
import { Link } from 'react-router-dom';
function Hero(){
  return<>
        <div className='hero'>
            <div className="hero-left">
                <div className='hero-data'>
                <h1>New Arrivals</h1>
                <p>New👋</p>
                <p>Collection</p>
                <p>For Everyone</p>
                </div>
                <div className="hero-btn">
                    <Link to='/mens'><button className='btn'>Latest Collection ↗️</button></Link>
                </div>
            </div>
            <div className="hero-right">
              <img src={girl} alt="girl" />
            </div>
        </div>
    </>
}

export default Hero