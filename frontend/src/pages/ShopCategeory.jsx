import React, { useContext } from 'react';
import './css/shop_categeory.css'
import { ShopContext, Shopcontext } from '../context/ShopCotext';
import Item from '../component/Item/Item';
import Fotter from '../component/Fotter/Fotter.jsx';
const Shopcategeory=(props)=>{
   
    const {all_product}=useContext(ShopContext);
    return(
    <div className='shop-categeory'>
        <div className='banner'>
         <img src={props.banner} alt="" />
        </div>
        <div className='shopcategeory-product'>
            {
                all_product.map((item,i)=>{

                if(item.category===props.categeory)
                {
                    return <Item key={i} id={item.id}name={item.name} img={item.image} old_price={item.old_price} new_price={item.new_price}></Item>
                }
                else  return null;
                    
            })};
        </div>
        <Fotter></Fotter>
    </div>);

}
export default Shopcategeory;