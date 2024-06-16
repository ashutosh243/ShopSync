import React  from 'react';
import ReactDOM  from 'react-dom';
import App from './App.js';
import ShopcontextProvider from './context/ShopCotext.jsx';
ReactDOM.render(<>
   
   <ShopcontextProvider>
      <App/>
   </ShopcontextProvider>

</>,document.getElementById('root'));


