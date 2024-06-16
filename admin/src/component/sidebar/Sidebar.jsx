import React from 'react'
import { Link } from 'react-router-dom';
import admin_list from '../../assets/admin-list.png';
import admin_cart from '../../assets/admin-cart.png';
import './Sidebar.css'
const Sidebar=()=>{
  return (<>
        <div  className="sidebar">
            
                <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                    <div className="sidebar-item">
                        <img src={admin_cart} alt="" />
                        <p>Add Product</p>
                    </div>
                </Link>

                <Link to={'/listproduct'} style={{textDecoration:"none"}}> 
                    <div className="sidebar-item">
                        <img src={admin_list} alt="" />
                        <p>List Product</p>
                    </div>
                </Link>
        </div>
    </>);
}
export default Sidebar;






         
         