import Navbar from  '../src/component/navbar/navbar';
import {BrowserRouter,Routes,Route } from "react-router-dom"; 
import Shop from '../src/pages/Shop';
import ShopCategeory from '../src/pages/ShopCategeory';
import Product from '../src/pages/Product';
import Login from '../src/pages/Loginsignup';
import Cart from '../src/pages/Cart';
import women_banner from './component/asset/banner_women.png'
import men_banner from './component/asset/banner_mens.png'
import kids_banner from './component/asset/banner_kids.png'
import Fotter from './component/Fotter/Fotter.jsx'

const App=()=>{

  return(
    <div >

      <BrowserRouter>
         <Navbar></Navbar>
        
         <Routes>
              <Route path='/' element={<Shop/>}></Route>
              <Route path='/mens' element={<ShopCategeory banner={men_banner}categeory="Men"/>}></Route>
              <Route path='/women' element={<ShopCategeory  banner={women_banner} categeory="women"/>}></Route>
              <Route path='/child' element={<ShopCategeory banner={kids_banner} categeory="kid"/>}></Route>
              <Route path='/product' element={<Product />}>
                <Route path=':productId' element={<Product/>}></Route>
              </Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
         </Routes>
        
      
      </BrowserRouter>
    </div>
  );
}

export default App;
