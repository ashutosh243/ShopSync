import { useState,useEffect } from 'react';
import React from 'react'
import './newcollection.css';
import Item from '../Item/Item';
import url from '../../test.js';


const Newcollection=()=>{

    const[new_collections,set_new_collection]=useState([]);
    useEffect(()=>{
       fetch(`${url}/newcollection`)
      .then((response)=>response.json())
      .then(data=>set_new_collection(data));
    },[]);
    

   return<>
        <div className="newcollection">
            <h1>NEW COLLECTION</h1>
            <hr></hr>
            <div className="new-items">
                {new_collections.map((d,i)=>{
                  return(<Item  key={i} id={d.id}name={d.name} img={d.image} old_price={d.old_price} new_price={d.new_price}></Item>)
                }
                )}
            </div>
         </div>
        </>

}

export default Newcollection