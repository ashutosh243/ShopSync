import React from 'react'
import './fotter.css';
import {Link} from 'react-router-dom';
import logo from '../asset/logo.png'
const Fotter=()=>{
    
    return<>
        
        <footer className='footer'>
              <div className="logo">
                <img src={logo} alt="" />
                <h1>ShopSync</h1>
              </div>
              <ul className="links">
                  
                  <Link><li>products</li></Link>
                  <Link><li>compony</li></Link>
                  <Link><li>Partners</li></Link>
                  <Link><li>Services</li></Link>
              </ul>
              <div className="social-media">
                      
                      <button className='insta'><ion-icon name="logo-instagram"></ion-icon></button>
                      <button className=' fb'><ion-icon name="logo-facebook"></ion-icon></button>
                      <button className='twitter'><ion-icon name="logo-twitter"></ion-icon></button>
              </div>
           </footer>
              <div className='copyright'>
                <hr></hr>
                <p>copyright@2023 -All Rights Reserved</p>
              </div>
    
    
    </>
}

export default Fotter