import React, { useContext, useState } from 'react';
import './navbar.css';
import cart from '../asset/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopCotext';

const Navbar=()=>{
    
    const [menubar,setMenu]=useState("shop");
    const {totalItems}=useContext(ShopContext)
    return<>
        <div className='navbar'>
            <div className="nav-logo">
                <p>ShopSync</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>  <Link to='/' >shop</Link>        {menubar==="shop"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}>    <Link to='/mens' >men</Link>     {menubar==="men"?<hr></hr>:<></>}</li>
                <li onClick={() =>{setMenu("women")}}> <Link to='/women' >women</Link> {menubar==="women"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("child")}}>  <Link to='/child' >child</Link>   {menubar==="child"?<hr></hr>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')?<button className="btn" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button className="btn">Login</button></Link>}
                <Link to='/cart'><img src={cart} alt="cart" /></Link>
                <div className="nav-count">{totalItems()}</div>
            </div>

        </div>
    </>



}

export default Navbar;
