import React, { useContext, useEffect, useState } from 'react'
import Item from '../Item/Item';
import './popular.css';
import url from '../../test.js';

const Popular =()=>{

    const [popular_product,set_popular_product]=useState([]);
    useEffect(()=>{
        fetch(`${url}/popularinwomen`).then((response)=>response.json()).then(data=>set_popular_product(data))

    },[]);
    return<>
        <div className="popular">
             <h1 className='popular'></h1>
             <h1>POPULAR IN WOMEN</h1>
             <hr></hr>
             <div className="popular-item">
                {
                    popular_product.map((item,i)=>{
 
                     return <Item key={i} id={item.id} name={item.name}
                     img={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>

                    })
                }
             </div>
        </div>
    </> 
}
export default Popular;