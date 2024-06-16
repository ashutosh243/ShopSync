import React from 'react'
import './Admin.css';
import Sidebar from '../../component/sidebar/Sidebar';
import {Link} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';
import Addproduct from '../../component/addproduct/Addproduct'
import Listproduct from '../../component/listproduct/Listproduct';

const Admin=()=>{
   return(<>
    <div className="admin">
         <Sidebar></Sidebar>
         
         <Routes>
            <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
            <Route path='/listproduct' element={<Listproduct></Listproduct>}></Route>
         </Routes>
    </div>
   </>);
}
export default Admin;