import React, { useState } from 'react'
import './Addproduct.css';
import static__image from '../../assets/logo.png';
import url from '../../../test.js';
const Addproduct = () => {

  const [image, setImage] = useState(false);
  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
  }

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    old_price: "",
    new_price: ""
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }
  const Addproduct = async () => {

    console.log(productDetails)
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image);
    // hitting upload end point ---------------------
    await fetch(`${url}/upload`, {
      method: "POST",
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    }).then((resp) => resp.json()).then((data) => { responseData = data });
    console.log(responseData);
    // mongodb insertion ---------------------
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      // hitting addroduct end point----------------
      await fetch(`${url}/addproduct`, {

          method: "POST",
          headers: {
            Accept: 'application/json',
            'content-Type': 'application/json',
          },
        body: JSON.stringify(product),
      }).then((resp) => { resp.json() }).
        then((data) => alert("product added successfully"));
    }
  }
  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here'></input>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p> offer price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here'></input>
        </div>
        <div className="addproduct-itemfield">
          <p>  price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here'></input>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>product Categeory</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selecter'>
          <option value="women">Women</option>
          <option value="Men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="input-area">
        <div>
         <input onChange={imageHandler} file={image} className="upload-section" type="file" name='image' id='file-input' />
        </div>
        <div>
        <button onClick={Addproduct} className='add'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Addproduct