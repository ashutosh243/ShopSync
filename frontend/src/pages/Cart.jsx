import React from 'react';
import Cartitem from '../component/cartitem/CartItem';
import './css/cart.css'

const Cart=()=>{
    return(<>
    <div className="items">
        <Cartitem></Cartitem>
        </div>
    </>)
}
export default Cart;