import React from 'react';
import {ShopContext} from '../context/ShopCotext';
import {useParams} from 'react-router-dom';
import { useContext } from 'react';
import Display from '../component/display/Display';

const Product=()=>{
    
    let {productId}=useParams();
    const {all_product} = useContext(ShopContext);
    const product=all_product.find((e)=>e.id===Number(productId));  
    return<>
        <div>
           <Display product={product}></Display>
    
        </div>
    </>
}
export default Product;