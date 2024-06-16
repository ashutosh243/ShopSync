import React from 'react'
import './offer.css';
import exclusive_img from '../asset/exclusive_image.png';
import { Link } from 'react-router-dom';
const offer=()=> {
  
  return <>
      <div className="offer">
          <div className="offer-left">
              <h1>Exclusive</h1>
              <h1>Offers for you</h1>
              <p>Only ON BEST SELLER PRODUCT</p>
              <Link to='/women'> <button>Check now</button></Link>
          </div>
          <div className="offer-right">
              <img src={exclusive_img} alt="" />
          </div>
      </div>
  </>
}

export default offer