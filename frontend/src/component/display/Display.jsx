import React, { useContext } from 'react'
import star from '../asset/star_icon.png';
import star_dull from '../asset/star_dull_icon.png';
import './display.css';
import { ShopContext } from '../../context/ShopCotext';
const Display=(props)=>{
   
   const {product}=props;
   console.log(product.image);
   const {addTocart}=useContext(ShopContext);
   const im=product.image;
   return<>
      <div className="mains">
            <div className="left">
                <div className="col-image">
                    <img src={im} alt="" />
                    <img src={im} alt="" />
                    <img src={im} alt="" />
                    <img src={im} alt="" />
                </div>
                <div className="main-img">
                    <img src={im} alt="" />
                </div>
            </div>
            <div className="right">
                    <div className="name">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="star">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star_dull} alt="" />
                    </div>
                    <div className="price">
                        <div className="old">{product.old_price}</div>
                        <div className="new">{product.new_price}</div>
                    </div>
                    <div className="size">
                        <h1>Select Size</h1>
                        <div>S</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XLL</div>
                    </div>
                    <div className="btn">
                        <button onClick={()=>{addTocart(product.id)}}>Add to cart</button>
                    </div>
                    <div className="description">
                        category: {product.category}
                    </div>
               </div>
       </div>

    </>
}

export default Display