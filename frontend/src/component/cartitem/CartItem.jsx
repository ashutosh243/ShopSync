import React, { useContext } from 'react';
import './CartItem.css'
import { ShopContext } from '../../context/ShopCotext';
import cross from '../asset/cart_cross_icon.png'

const Cartitem = () => {

  const { all_product, cartItem, addTocart, removeFromcart,totalAmount } = useContext(ShopContext)
  return (
    <>
     
      <div className="main-head">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
      </div>
      
      <div className="items">
        {
          all_product.map((e) => {
            if (cartItem[e.id] > 0) {
              return (
                <div className='product'>
                  <img src={e.image} alt="" className="product-icon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                  <p>${cartItem[e.id] * e.new_price}</p>
                  <img className='cross-icon' src={cross} onClick={() => removeFromcart(e.id)} alt="" />
                </div>)
            }
            return null;
          })}
      </div>

      <div className="total">
         <div className="left-container">
         <input type="text" placeholder='promocode' />
          <button>Apply</button>
         </div>

         <div className="right-container">
            <div className="total-section">
              <p>subtotal</p>
              <p>${totalAmount()}</p>
            </div>
            <hr></hr>
            <div className="total-section">
              <p>shipping fee</p>
              <p>$0</p>
            </div>
            <hr></hr>
            <div className="total-section">
              <p>Total</p>
              <p>${totalAmount()}</p>
            </div>
         </div>
      </div>

      
    </>);
}
export default Cartitem;
