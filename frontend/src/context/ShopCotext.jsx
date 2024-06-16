import React, {createContext, useState,useEffect} from "react";
import url from '../test.js';


export const ShopContext= createContext(null);
const getDefaultcart=()=>{
    let cart={};
    for(let i=0; i<300+1; i++)
    {
        cart[i]=0;
    }
    return cart;
}
const ShopContextProvider=(props)=>{

       const[all_product,setAll_pro]=useState([]);
       const [cartItem,setCartItem]=useState(getDefaultcart());

       useEffect(()=>{
            fetch(`${url}/allproduct`).then((response)=>response.json()).then(data=>setAll_pro(data));

            if(localStorage.getItem('auth-token')){
               fetch(`${url}/getcart`,{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
               }).then((response)=>response.json()).then(data=>{setCartItem(data)});
            }

        },[]);
        const addTocart=(itemId)=>{
        
           setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
           if(localStorage.getItem('auth-token'))
           {
                

                        fetch(`${url}/addtocart`,{
                            method: 'POST',
                            headers:{
                            Accept:'application/form-data',
                            'auth-token':`${localStorage.getItem('auth-token')}`,
                            'Content-Type': 'application/json'
                            },
                            body:JSON.stringify({"itemId":itemId}),
                        }).then((response)=>{response.json()}).then((data)=>{console.log(data)});
           }
        }
        const removeFromcart=(itemId)=>{
            
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
            if(localStorage.getItem('auth-token'))
            {
                fetch(`${url}/removetocart`,{
                    method: 'POST',
                    headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({"itemId":itemId}),
                }).then((response)=>{response.json()}).then((data)=>{console.log(data)});
            }
            
        }
        const totalItems=()=>{
            
            let cnt=0;
            for(let it in cartItem)
            {
                if(cartItem[it]>0)
                {
                  cnt++;
                }
            }
            return cnt;
        }
        const totalAmount=()=>{
            let amount=0;
            for(let it in cartItem)
            {
                if(cartItem[it]>0)
                {
                    let product=all_product.find((product)=>product.id===Number(it))
                    amount+=product.new_price*cartItem[it];
                }
            }
            return amount;
        }
        const contextValue={totalItems,all_product,cartItem,addTocart,removeFromcart,totalAmount};



       return(

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

       )
}
export default ShopContextProvider;