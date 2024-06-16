import React from 'react';
import './css/login.css';
import { useState } from 'react';
import url from '../test.js';

const Login=()=>{
   
    const[state,setstate]=useState("Sign up");
    const [FormData,setFormData]=useState({
        username:"",
        password:"",
        email:"" 

    });
    const changeHandler=(e)=>{

        setFormData({...FormData,[e.target.name]:e.target.value});
    }

    const login=async()=>{
        let responseData;
         await fetch(`${url}/login`,{
            method:"POST",
            headers:{
                Accept: 'application/form-data',
                'content-type': 'application/json'
            
            },
            body:JSON.stringify(FormData),
      }).then((response)=>response.json()).then((data)=>responseData=data);

       if(responseData.success){
          localStorage.setItem('auth-token',responseData.token);
          window.location.replace('/');
       }
       else
       {
         alert(responseData.error);
       }
    }
    const signup=async()=>{

       let responseData;
       await fetch(`${url}/signup`,{
        method:"POST",
        headers:{
            Accept: 'application/form-data',
            'content-type': 'application/json'
        
         },
         body:JSON.stringify(FormData),
       }).then((response)=>response.json()).then((data)=>responseData=data);

       if(responseData.success){
          localStorage.setItem('auth-token',responseData.token);
          window.location.replace('/');
       }
       else
       {
         alert(responseData.error);
       }

    }
    return<>
        <div className='container'>
            <h1>{state}</h1>
            <div className="fields">
               {state==="Sign up"?<input onChange={changeHandler} name="username" value={FormData.username}type="text"  id="" placeholder='Name'/>:<></>} 
                <input onChange={changeHandler} name="email" value={FormData.email} type="email"   placeholder='Email' />
                <input onChange={changeHandler} name="password" value={FormData.password} type="password"  id="" placeholder='password' />
            </div>
            <div className="btns">
                <button onClick={()=>{state==="Log in"?login():signup()}}>Continue</button>
            </div>
            <div className='login'>
                {state==="Sign up"?<div><p>Already have an account?</p><p className='login-link' onClick={()=>{setstate("Log in")}}>login here</p></div>:<></>} 
                {state==="Log in"?<div><p>creater an account</p><p className='login-link' onClick={()=>{setstate("Sign up")}}>create here</p></div>:<></>} 
            </div>
        </div>
    </>

}
export default Login;