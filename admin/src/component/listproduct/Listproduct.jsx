import React, { useEffect, useState } from 'react'
import'./Listproduct.css';
import cross from '../../assets/cart_cross_icon.png';
import static_icon from '../../assets/logo.png';
import url from '../../../test.js';
const Listproduct=()=>{

  const [allproduct,setproduct]=useState([]);

    const fetchInfo= async()=>{
    await fetch(`${url}/allproduct`).then((res)=>res.json()).then(data=>{
        setproduct(data);
    })}

    const remove_product= async(id)=>{
        await fetch(`${url}/removeproduct`,{
               method: 'POST',
               headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
               },
               body: JSON.stringify({id:id})

        }).then((res)=>res.json()).then(data=>alert("successfully removed"));
        await fetchInfo();
    }
    useEffect(()=>{
      fetchInfo();
    },[]);
   
  return (
    <div className="product_container">
      <div className="format_main">
        <p>Product</p>
        <p>Title</p>
        <p>New price</p>
        <p>Old price</p>
        <p>category</p>
        <p>Remove</p>
      </div>
      <div className="all_product">
         {allproduct.map((product,index)=>{
          return <div  key={index} className="list-format">


               <img className="product_img" src={static_icon} alt="" />
               <p>{product.name}</p>
               <p>{product.old_price}</p>
               <p>{product.new_price}</p>
               <p>{product.category}</p>
               <img  onClick={()=>{remove_product(product.id)}}className="cross_img"src={cross} alt="" />
          </div>
      })}
      </div>
    </div>
  )
}

export default Listproduct