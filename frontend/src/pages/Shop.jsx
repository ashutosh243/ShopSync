import React from 'react'
import Hero from '../component/Hero/Hero';
import Popular from '../component/popular/Popular';
import Offer from '../component/offer/offer.jsx';
import Newcollection from '../component/newcollection/newcollection.jsx';
import Fotter from '../component/Fotter/Fotter.jsx'



const Shop=  ()=>{
  return<>
   
     <Hero></Hero>
     <Popular></Popular>
     <Offer></Offer>
     <Newcollection></Newcollection>
     <Fotter></Fotter>
  </>
}
export default Shop;
